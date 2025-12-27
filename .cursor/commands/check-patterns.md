# Component Patterns

This document defines the patterns and conventions used throughout the component library. Use it as a reference when building new components or reviewing existing ones for consistency.

**Key principles:**

- **Radix UI primitives** are used as the foundation for interactive components (accordion, dropdown, modal, tabs, etc.), providing accessible, unstyled building blocks
- Components support both **monolith** (single import) and **composable** (primitives) usage patterns
- **CVA (class-variance-authority)** is the standard approach for component variants, providing type-safe, exportable styling
- **`data-slot`** is required on all components for CSS targeting, debugging, and testing
- **Named Tailwind groups** (e.g., `group/alert`) prevent selector collisions when nested
- Accessibility is built-in with proper ARIA attributes, keyboard navigation, and focus management

## Component Architecture

Components in this library support two usage patterns: **monolith** (simple, opinionated) and **composable** (flexible, primitives-based).

### Component structure: monolith vs primitives

**Monolith components** provide a simple, props-driven API for common use cases:

```tsx
import { Alert } from '@/components/alert';

<Alert
  variant="success"
  message="Order placed!"
  description="You'll receive a confirmation email shortly."
  dismiss={{ label: 'Dismiss', onClick: handleDismiss }}
/>
```

**Composable components** expose primitives for full layout and content control:

```tsx
import * as AlertPrimitive from '@/components/alert';

<AlertPrimitive.Root variant="success">
  <AlertPrimitive.Header>
    <AlertPrimitive.Title>Order placed!</AlertPrimitive.Title>
    <AlertPrimitive.Description>You'll receive a confirmation email shortly.</AlertPrimitive.Description>
  </AlertPrimitive.Header>
  <AlertPrimitive.Actions>
    <AlertPrimitive.Dismiss>Dismiss</AlertPrimitive.Dismiss>
  </AlertPrimitive.Actions>
</AlertPrimitive.Root>
```

**When to use each:**

| Pattern    | Use When                                                 |
| ---------- | -------------------------------------------------------- |
| Monolith   | Standard layouts, quick implementation, consistent UI    |
| Primitives | Custom layouts, conditional content, complex compositions |

### How primitives are organized and exported

Primitives are exported with short names via a barrel file (`primitives.ts`):

```tsx
// primitives.ts
export { AlertRoot as Root } from './primitives/alert-root';
export { AlertTitle as Title } from './primitives/alert-title';
// ...
```

This enables the `* as ComponentPrimitive` import pattern:

```tsx
import * as AlertPrimitive from '@/components/alert';

<AlertPrimitive.Root>
  <AlertPrimitive.Title>...</AlertPrimitive.Title>
</AlertPrimitive.Root>
```

### File and folder structure conventions

```
components/
└── alert/
    ├── alert.tsx           # Monolith component
    ├── index.ts            # Public exports (monolith + primitives)
    ├── primitives.ts       # Barrel file for primitives (short names)
    ├── primitives/         # Individual primitive components
    │   ├── alert-root.tsx
    │   ├── alert-title.tsx
    │   ├── alert-description.tsx
    │   └── ...
    └── storybook/
        └── alert.stories.tsx
```

**Simple components** (no primitives) have a simpler structure:

```
components/
└── button/
    ├── button.tsx          # The component
    ├── index.ts            # Public exports
    └── storybook/
        └── button.stories.tsx
```

### Naming conventions

| Element            | Convention                     | Example                          |
| ------------------ | ------------------------------ | -------------------------------- |
| Component folder   | kebab-case                     | `product-card/`                  |
| Component file     | kebab-case, matches folder     | `product-card.tsx`               |
| Primitive files    | `{component}-{part}.tsx`       | `alert-title.tsx`                |
| Component function | PascalCase                     | `ProductCard`, `AlertTitle`      |
| Props type         | `{Component}Props`             | `AlertProps`, `AlertTitleProps`  |
| Primitive exports  | Short names (`Root`, `Title`)  | `export { AlertRoot as Root }`   |

## Polymorphism & Composition

The `asChild` pattern (via Radix's `Slot` component) allows consumers to replace a component's rendered element while preserving its styles and behavior.

### How to implement the `asChild` pattern

Use Radix's `Slot` component to merge props and styles onto a consumer-provided child:

```tsx
import { Slot } from '@radix-ui/react-slot';
import type { ComponentProps } from 'react';

export interface ProductCardLinkProps extends ComponentProps<'a'> {
  asChild?: boolean;
}

export function ProductCardLink({ asChild = false, className, ...props }: ProductCardLinkProps) {
  const Component = asChild ? Slot : 'a';

  return (
    <Component
      className={cn('absolute inset-0 focus-visible:outline-2 ...', className)}
      data-slot="product-card-link"
      {...props}
    />
  );
}
```

**Usage:**

```tsx
// Default: renders an <a> tag
<ProductCardLink href="/products/123">View Product</ProductCardLink>

// With asChild: renders the child element (e.g., Next.js Link) with merged props
<ProductCardLink asChild>
  <Link href="/products/123">View Product</Link>
</ProductCardLink>
```

### How to extend `asChild` to monolith components

Monolith components can expose `asChild` by forwarding it to the relevant primitive. **Review all primitives used in a monolith — if any support `asChild`, the monolith should expose it.**

Add `asChild` (and `children` for the custom element) to the monolith's props interface and pass it through:

```tsx
interface Option {
  value: string;
  label: string;
  image?: {
    src: string;
    alt: string;
    asChild?: boolean;   // Expose asChild for image primitive
    children?: ReactNode;
  };
}

export interface CardRadioGroupProps {
  options: Option[];
  link?: {
    href: string;
    ariaLabel: string;
    asChild?: boolean;   // Expose asChild for link primitive
    children?: ReactNode;
  };
}

export function CardRadioGroup({ options, link, ...props }: CardRadioGroupProps) {
  return (
    <CardRadioGroupPrimitive.Root {...props}>
      {options.map(({ label, value, image }) => (
        <CardRadioGroupPrimitive.Item key={value} value={value}>
          {image && (
            <CardRadioGroupPrimitive.Thumbnail>
              {/* Forward asChild to the image primitive */}
              <CardRadioGroupPrimitive.Image
                src={image.src}
                alt={image.alt}
                asChild={image.asChild}
              >
                {image.children}
              </CardRadioGroupPrimitive.Image>
            </CardRadioGroupPrimitive.Thumbnail>
          )}
          <CardRadioGroupPrimitive.Label>{label}</CardRadioGroupPrimitive.Label>
        </CardRadioGroupPrimitive.Item>
      ))}
    </CardRadioGroupPrimitive.Root>
  );
}
```

**Checklist when building/reviewing monolith components:**

1. Identify all primitives used in the monolith
2. Check if any primitive accepts `asChild` (links, images, icons)
3. For each `asChild` primitive, expose `asChild` and `children` in the monolith's props
4. Forward these props to the primitive

### How flexible child elements work (icons, images, links)

Use `asChild` for any element where consumers might want to substitute their own component (custom icons, framework-specific images, router links):

**Icons:**

```tsx
export function FileInputIcon({ asChild = false, className, children }: FileInputIconProps) {
  const DefaultIcon = getIconForFile(file);

  if (asChild) {
    return (
      <Slot className={cn('size-4', className)} data-slot="file-input-icon">
        {children}
      </Slot>
    );
  }

  return <DefaultIcon className={cn('size-4', className)} data-slot="file-input-icon" />;
}

// Usage: custom icon
<FileInputIcon asChild>
  <MyCustomIcon />
</FileInputIcon>
```

**Images:**

```tsx
// Default: renders <img>
<ProductCardImage src="/photo.jpg" alt="Product" />

// With asChild: renders Next.js Image with component styles
<ProductCardImage asChild>
  <Image src="/photo.jpg" alt="Product" fill />
</ProductCardImage>
```

**Links:**

```tsx
// Default: renders <a>
<ProductCardLink href="/products/123" />

// With asChild: renders Next.js Link with component styles
<ProductCardLink asChild>
  <Link href="/products/123" />
</ProductCardLink>
```

**When to add `asChild` to a primitive:**

| Element Type | Add `asChild`? | Reason                                               |
| ------------ | -------------- | ---------------------------------------------------- |
| Links        | Yes            | Consumers use framework routers (Next.js, Remix)     |
| Images       | Yes            | Consumers use optimized image components             |
| Icons        | Yes            | Consumers use different icon libraries               |
| Buttons      | Sometimes      | If it might wrap a link (`ButtonLink`)               |
| Containers   | Rarely         | Usually no need to replace `<div>`                   |

## Styling Patterns

Styling in this library uses Tailwind CSS with consistent patterns for organization, theming, and state management.

### How the data-slot attribute is used

Every primitive component includes a `data-slot` attribute identifying its role. This serves multiple purposes:

1. **CSS targeting** — Consumers can style nested primitives from a parent selector
2. **DevTools debugging** — Easy to identify components in the DOM
3. **Testing** — Reliable selectors for test automation

```tsx
<DropdownMenuPrimitive.Item
  className={cn('...', className)}
  data-slot="dropdown-menu-item"
  data-variant={variant}
  {...props}
>
```

**Naming convention:** `{component}-{part}` in kebab-case:

| Component          | data-slot value               |
| ------------------ | ----------------------------- |
| `ProductCardRoot`  | `product-card-root`           |
| `ProductCardTitle` | `product-card-title`          |
| `AlertDismiss`     | `alert-dismiss`               |
| `CheckboxRoot`     | `checkbox-root`               |

**Consumer usage:**

```css
/* Target all titles within product cards */
[data-slot="product-card-root"] [data-slot="product-card-title"] {
  font-size: 1.25rem;
}
```

### How Tailwind classes are organized

Organize classes into logical groups with **base styles on one uncommented line**, then state variants with comments:

```tsx
<CheckboxPrimitive.Root
  className={cn(
    'peer flex h-5 w-5 items-center justify-center rounded-md border transition-colors duration-150',
    // Hover state
    'hover:border-contrast-300',
    // Focus-visible state
    'focus-visible:outline-0 focus-visible:outline-offset-2',
    // Disabled state
    'disabled:cursor-not-allowed disabled:border-contrast-200 disabled:bg-contrast-100',
    // Checked state
    'data-[state=checked]:border-foreground data-[state=checked]:bg-foreground',
    // Unchecked state
    'data-[state=unchecked]:border-contrast-200 data-[state=unchecked]:bg-background',
    className,
  )}
/>
```

**Grouping order:**

1. **Base styles** (no comment) — layout, spacing, typography, colors, borders, effects, transitions all on one line
2. **Hover state** — `hover:*` classes
3. **Focus state** — `focus:*` classes
4. **Focus-visible state** — `focus-visible:*` classes
5. **Active state** — `active:*` classes
6. **Open/Closed state** — `data-[state=open]:*`, `data-[state=closed]:*` classes
7. **Disabled state** — `disabled:*` classes
8. **Group/Peer states** — `group-*:`, `peer-*:` classes
9. **Responsive** — breakpoint prefixes (`sm:*`, `md:*`, `lg:*`)
10. **Container queries** — `@*:` classes
11. **`className` prop** — always last for consumer overrides

**Rules:**

- No comment for base styles — the first line has no comment
- Keep related classes together — multiple classes for the same state go on the same line
- End with `className,` — allows external overrides

### Named groups for component scoping

Always use **named groups** (e.g., `group/alert`) instead of bare `group` classes. This prevents group collisions when components are nested inside each other.

**Why this matters:**

If two components both use `group`, and one is nested inside the other, `group-*` selectors in the inner component will incorrectly match the outer component's group. Named groups isolate each component's group scope.

**❌ Bad — bare group causes collisions:**

```tsx
// Card uses group
<div className="group">
  {/* Alert also uses group — its group-data-* selectors might match Card! */}
  <div className="group">
    <h4 className="group-data-[variant=error]:text-red-900">...</h4>
  </div>
</div>
```

**✅ Good — named groups are isolated:**

```tsx
// Card uses group/card
<div className="group/card">
  {/* Alert uses group/alert — selectors are scoped correctly */}
  <div className="group/alert" data-variant="error">
    <h4 className="group-data-[variant=error]/alert:text-red-900">...</h4>
  </div>
</div>
```

**Naming convention:**

Use the component name (kebab-case) as the group name:

| Component      | Group Class          | Child Selector Example                        |
| -------------- | -------------------- | --------------------------------------------- |
| `Alert`        | `group/alert`        | `group-data-[variant=error]/alert:text-red`   |
| `ProductCard`  | `group/product-card` | `group-hover/product-card:opacity-100`        |
| `DropdownMenu` | `group/dropdown`     | `group-data-[state=open]/dropdown:rotate-180` |

### How CVA and data attributes are used for styling

#### CVA as the default for component variants

Use **CVA (class-variance-authority)** as the standard approach for component variants, which provides:

- **Type-safe variant props** via `VariantProps`
- **Clean organization** of variant logic
- **Exportable variants** when needed (e.g., `buttonVariants`)
- **Compound variant support** for complex combinations

```tsx
import { cva, type VariantProps } from 'class-variance-authority';

const alertVariants = cva(
  'relative w-full rounded-lg border px-4 py-3 text-sm',
  {
    variants: {
      variant: {
        default: 'bg-background text-foreground',
        success: 'bg-success/10 text-success-foreground border-success/20',
        warning: 'bg-warning/10 text-warning-foreground border-warning/20',
        error: 'bg-error/10 text-error-foreground border-error/20',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

type AlertRootProps = ComponentProps<'div'> & VariantProps<typeof alertVariants>;

function AlertRoot({ variant, className, ...props }: AlertRootProps) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  );
}
```

#### When to export variant functions

Export the CVA variant function when consumers might want to apply the styling **without** the component wrapper:

```tsx
// Export for external use
export { alertVariants };

// Consumer can style any element like an alert
<div className={alertVariants({ variant: 'error' })}>Custom alert</div>
```

**Export variants for:** Button, Badge, and other "utility" components often used for styling.

**Don't export variants for:** Complex composable components (Alert, ProductCard) where the component structure matters.

#### Data attributes: `data-slot` is required, `data-variant` is optional

**`data-slot` is always required** — every component needs it for CSS targeting, debugging, and testing:

```tsx
<div data-slot="alert" className={cn(alertVariants({ variant }), className)} {...props} />
```

**`data-variant` is optional** — add it when consumers need CSS override hooks:

```tsx
// Optional: expose variant for CSS overrides
<div data-slot="alert" data-variant={variant} className={...} {...props} />
```

| Attribute      | Required? | Purpose                                      |
| -------------- | --------- | -------------------------------------------- |
| `data-slot`    | ✅ Always  | CSS targeting, debugging, testing            |
| `data-variant` | Optional  | CSS override hooks for consumers             |

#### When children need to inherit variant styles (cascading)

Use **data attributes + `group-data-*` selectors** when child primitives need variant-aware styling that cascades from the root.

**When cascading is needed:**

| Scenario                                        | Use Cascading? |
| ----------------------------------------------- | -------------- |
| Variant only affects the root element           | ❌ No           |
| Children have fixed styles (CSS variables)      | ❌ No           |
| Children need different styles per variant      | ✅ Yes          |
| Props like `aspectRatio` affect multiple children | ✅ Yes          |

**Example: ProductCard with aspect ratio cascading**

The `aspectRatio` prop on root needs to affect the thumbnail child:

```tsx
// Root sets data attribute + named group
<article
  data-slot="product-card"
  data-aspect-ratio={aspectRatio}
  className="group/product-card ..."
>

// Child uses group-data-* selector to inherit
<div
  className={cn(
    'group-data-[aspect-ratio="5:6"]/product-card:aspect-[5/6]',
    'group-data-[aspect-ratio="3:4"]/product-card:aspect-[3/4]',
    'group-data-[aspect-ratio="1:1"]/product-card:aspect-square',
  )}
/>
```

**Example: Self-contained Alert (no cascading needed)**

Alert children use fixed CSS variables, not variant-dependent styles:

```tsx
// Root handles its own variant styling via CVA
function AlertRoot({ variant, className, ...props }) {
  return (
    <div
      data-slot="alert"
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  );
}

// Children have fixed styles — no variant awareness needed
function AlertTitle({ className, ...props }) {
  return (
    <h5
      data-slot="alert-title"
      className={cn('font-medium tracking-tight', className)}
      {...props}
    />
  );
}
```

#### Context: only for JavaScript logic

Use React context only when child components need the **actual value** for JavaScript logic:

- Conditional rendering based on a prop
- Calculations or transformations
- Passing values to non-CSS APIs (callbacks, etc.)

**Do NOT use context** for styling — CVA or data attributes handle that.

```tsx
// ✅ Good: Context for JS logic (action/dismiss callbacks)
const AlertContext = createContext<{ action?: ActionConfig; dismiss: DismissConfig }>();

// ❌ Bad: Context for styling (use CVA instead)
const AlertContext = createContext<{ variant: 'success' | 'error' }>();
```

### How CSS variables are used for theming

> **Note:** CSS variable patterns are currently being refactored. This section will be updated once the new conventions are finalized.

### How focus states are handled

See [Focus management](#focus-management) in Accessibility Patterns for detailed guidance. Key points:

- Always use `focus-visible` instead of `focus` for keyboard-only focus indicators
- Use `outline` with `outline-offset` instead of `ring` utilities

### How animations are handled

**CSS Transitions** for simple state changes (hover, focus):

```tsx
// Transition on a specific property
'transition-transform duration-500 ease-out group-hover:scale-110'

// Transition on colors
'transition-colors duration-150'
```

**Tailwind animate utilities** for enter/exit animations (modals, dropdowns, popovers):

```tsx
// Dropdown/popover content
'data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95'
'data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95'
```

**Built-in Tailwind animations** for continuous effects:

```tsx
// Loading spinner
'animate-spin'
```

**Guidelines:**

| Animation Type   | Approach                                            |
| ---------------- | --------------------------------------------------- |
| Hover/focus      | CSS transitions (`transition-*`, `duration-*`)      |
| Enter/exit       | Tailwind animate (`animate-in`, `animate-out`)      |
| Continuous/loop  | Built-in Tailwind (`animate-spin`, `animate-pulse`) |

## TypeScript Patterns

### How to type component props

**For simple components** — use `interface extends ComponentProps<'element'>`:

```tsx
import type { ComponentProps } from 'react';

export interface ButtonProps extends ComponentProps<'button'> {
  variant?: 'primary' | 'brand' | 'outline' | 'ghost' | 'danger';
  size?: 'large' | 'medium' | 'small' | 'x-small';
  loading?: boolean;
}

export function Button({ variant = 'primary', size = 'large', loading = false, ...props }: ButtonProps) {
  // ...
}
```

**For simple type aliases** — use `type = ComponentProps<'element'>`:

```tsx
import type { ComponentProps } from 'react';

export type ProductCardThumbnailProps = ComponentProps<'div'>;

export function ProductCardThumbnail({ className, ...props }: ProductCardThumbnailProps) {
  // ...
}
```

### How to extend Radix component types

When wrapping Radix primitives, extend from `ComponentProps<typeof RadixPrimitive.Component>`:

```tsx
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import type { ComponentProps } from 'react';

export interface DropdownMenuItemProps extends ComponentProps<typeof DropdownMenuPrimitive.Item> {
  variant?: 'default' | 'danger';
}

export function DropdownMenuItem({ variant = 'default', ...props }: DropdownMenuItemProps) {
  return (
    <DropdownMenuPrimitive.Item data-variant={variant} {...props} />
  );
}
```

### How to type polymorphic components

For components with an `as` prop that changes the rendered element, use generics:

```tsx
import type { ComponentProps, ElementType } from 'react';

export type ProductCardRootProps<E extends ElementType = 'article'> = Omit<
  ComponentProps<E>,
  'as'
> & {
  as?: E;
  aspectRatio?: '5/6' | '3/4' | '1/1';
};

export function ProductCardRoot<T extends ElementType = 'article'>({
  as,
  aspectRatio = '5/6',
  ...props
}: ProductCardRootProps<T>) {
  const Component = as ?? 'article';
  return <Component data-aspect-ratio={aspectRatio} {...props} />;
}
```

This allows TypeScript to infer the correct props based on the `as` value:

```tsx
// Props are inferred as <article> props
<ProductCardRoot href="/..." />  // ❌ Error: href not valid on article

// Props are inferred as <a> props
<ProductCardRoot as="a" href="/..." />  // ✅ Works
```

### How to use VariantProps with CVA

When using CVA, use `VariantProps` to extract variant types automatically:

```tsx
import { cva, type VariantProps } from 'class-variance-authority';

const buttonVariants = cva('inline-flex items-center justify-center ...', {
  variants: {
    variant: {
      primary: 'bg-foreground text-background',
      outline: 'border bg-background',
    },
    size: {
      sm: 'h-8 px-3 text-sm',
      lg: 'h-12 px-6 text-base',
    },
  },
  defaultVariants: {
    variant: 'primary',
    size: 'sm',
  },
});

type ButtonProps = ComponentProps<'button'> & VariantProps<typeof buttonVariants>;

export function Button({ variant, size, className, ...props }: ButtonProps) {
  return (
    <button className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}
```

`VariantProps` extracts `{ variant?: 'primary' | 'outline'; size?: 'sm' | 'lg' }` automatically — no need to define variant types twice.

## React Patterns

### When to use 'use client'

Add `'use client'` at the top of a file when the component uses:

- **React hooks** — `useState`, `useEffect`, `useContext`, `useCallback`, `useMemo`, `useRef`, etc.
- **Event handlers** — `onClick`, `onChange`, `onSubmit`, etc.
- **Browser APIs** — `window`, `document`, `localStorage`, etc.
- **Third-party client libraries** — Embla Carousel, Radix primitives with state, etc.

**Do NOT add `'use client'`** for pure presentational components that only render JSX:

```tsx
// ✅ No 'use client' needed — just renders JSX with cn()
import type { ComponentProps } from 'react';
import { cn } from '@/lib';

export function AlertTitle({ className, ...props }: ComponentProps<'h5'>) {
  return (
    <h5 className={cn('text-sm font-normal', className)} {...props} />
  );
}
```

```tsx
// ✅ Needs 'use client' — uses hooks and context
'use client';

import { createContext, useContext, useState } from 'react';

export function CarouselRoot({ children, ...props }) {
  const [api, setApi] = useState(null);
  // ...
}
```

**Rule of thumb:** If you import anything from `'react'` other than types (`type`, `ComponentProps`, `ReactNode`), you likely need `'use client'`.

### How className and props are merged

Use the `cn()` utility (clsx + tailwind-merge) to merge classNames:

```tsx
import { cn } from '@/lib';

export function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-md px-4 py-2',
        className,  // Consumer overrides come last
      )}
      {...props}   // Spread remaining props
    />
  );
}
```

**Key patterns:**

1. **`className` always comes last in `cn()`** — allows consumer overrides
2. **Spread `...props` on the element** — passes through all HTML attributes
3. **Destructure known props** — extract `className`, custom props, then `...props`

```tsx
// Pattern: destructure → cn() with className last → spread props
export function Component({ variant, size, className, ...props }: Props) {
  return (
    <div
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    />
  );
}
```

### When to use React context

Use React context when child components need access to the **actual value** for JavaScript logic:

- Conditional rendering based on a variant
- Calculations or transformations
- Passing values to non-CSS APIs

**Do NOT use context** when children only need the value for CSS styling — use data attributes with `group-data-*` selectors instead (see "How data attributes and CVA are used for styling").

**Hybrid pattern:** It's valid to use both. Add data attributes to the root for CSS-based styling, and keep context available for children that need the value in JS.

```tsx
<ProductCardContext.Provider value={contextValues}>
  <ProductCardRootElement
    data-aspect-ratio={aspectRatio}
    className="group/product-card ..."
  >
    {children}
  </ProductCardRootElement>
</ProductCardContext.Provider>
```

## Accessibility Patterns

Accessibility is built into the component library. Radix primitives handle most accessibility concerns automatically (focus trapping, keyboard navigation, ARIA attributes). This section documents patterns for custom components and areas where we extend Radix's defaults.

### ARIA attribute conventions

**Semantic roles:**

Use appropriate ARIA roles to convey component purpose to assistive technologies:

| Component Type       | Role                              | Example                                               |
| -------------------- | --------------------------------- | ----------------------------------------------------- |
| Alert/notification   | `role="alert"`                    | `<AlertRoot role="alert">`                            |
| Navigation           | `role="navigation"`               | `<PaginationRoot role="navigation">`                  |
| Loading indicator    | `role="status"`                   | `<Spinner role="status">`, `<Skeleton role="status">` |
| Progress indicator   | `role="progressbar"`              | `<FileInputProgress role="progressbar">`              |
| Carousel container   | `role="region"`                   | `<CarouselRoot role="region">`                        |
| Carousel slide       | `role="group"`                    | `<CarouselItem role="group">`                         |
| List containers      | `role="list"` / `role="listitem"` | `<FileInputList>`, `<FileInputItem>`                  |
| Clickable non-button | `role="button"`                   | `<FileInputDropzone role="button">`                   |

**Descriptive attributes:**

- Use `aria-label` for elements that need text alternatives (icons, image links, actions):

```tsx
<ProductCardPrimitive.Link aria-label="View Wood Handle Cleaning Brush" href="..." />
<Button aria-label="Remove item" onClick={onRemove}><TrashIcon /></Button>
<SwatchRadioGroupPrimitive.Item aria-label="Black" value="black" />
```

- Use `aria-roledescription` for custom widget descriptions:

```tsx
<CarouselRoot aria-roledescription="carousel" />
<CarouselItem aria-roledescription="slide" />
```

- Use `aria-busy` for loading/pending states:

```tsx
// Button with loading state
<button aria-busy={loading} disabled={loading}>Submit</button>

// Select with pending state
<SelectRoot aria-busy={pending} data-pending={pending ? '' : undefined}>
```

**Important:** Any component with a `loading` or `pending` prop should include `aria-busy`. This tells screen readers the element is being updated.

- Use `aria-invalid` for form validation:

```tsx
<Textarea aria-invalid={hasError} />
```

**Prop-to-ARIA mapping checklist:**

When a component has these props, ensure the corresponding ARIA attribute is set:

| Component Prop        | Required ARIA Attribute | Example                                  |
| --------------------- | ----------------------- | ---------------------------------------- |
| `loading` / `pending` | `aria-busy`             | `aria-busy={loading}`                    |
| `error` / `invalid`   | `aria-invalid`          | `aria-invalid={hasError}`                |
| `disabled`            | (native attribute)      | `disabled={disabled}`                    |
| `label` (hidden)      | `aria-label`            | `aria-label={label}`                     |
| `describedBy`         | `aria-describedby`      | `aria-describedby={descriptionId}`       |

**Screen reader text:**

Use `sr-only` for text that should be read by screen readers but hidden visually:

```tsx
// Loading state announcements
{pending && <span className="sr-only">Loading...</span>}

// Visually hidden labels
<Label className={hideLabel ? 'sr-only' : 'mb-2'}>Email</Label>

// Hidden inputs
<input className="sr-only" type="file" />
```

### Keyboard navigation patterns

**Keyboard support:**

- Interactive elements should be keyboard accessible via `tabIndex`
- Use `tabIndex={-1}` to remove elements from tab order (e.g., hidden inputs, programmatically focused elements)
- Handle keyboard events with `onKeyDown` for custom interactions

```tsx
// Dropzone accepts keyboard activation
<div
  role="button"
  tabIndex={disabled ? -1 : 0}
  onKeyDown={handleKeyDown}
>
```

**Arrow key navigation:**

For components like carousels, handle arrow keys at the container level:

```tsx
<div onKeyDownCapture={handleKeyDown} role="region">
  {/* Arrow keys navigate between slides */}
</div>
```

**Common keyboard conventions:**

Radix handles these automatically for its primitives. For custom components, follow these patterns:

| Key                | Action                                       |
| ------------------ | -------------------------------------------- |
| `Enter` / `Space`  | Activate buttons, select items               |
| `Escape`           | Close modals, dropdowns, popovers            |
| `Arrow Up/Down`    | Navigate vertical lists, increment/decrement |
| `Arrow Left/Right` | Navigate horizontal lists, carousels         |
| `Tab`              | Move focus to next focusable element         |
| `Shift + Tab`      | Move focus to previous focusable element     |

### Focus management

**Use `focus-visible` instead of `focus`:**

Use `focus-visible` for keyboard-only focus indicators. This prevents focus rings from appearing on mouse clicks.

```tsx
// ✅ Good — only shows on keyboard focus
'focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2'

// ❌ Bad — shows on every focus (including mouse clicks)
'focus:outline-2'
```

**Always pair `focus:outline-none` with `focus-visible:outline-*`:**

The `focus:outline-none` removes the browser's default focus outline, then `focus-visible:outline-*` adds it back only for keyboard navigation:

```tsx
// ✅ Correct pattern — remove default, add back for keyboard only
'focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--focus-color)]'

// ❌ Missing focus:outline-none — browser default may still show on some elements
'focus-visible:outline-2 focus-visible:outline-offset-2'
```

**Use `outline` instead of `ring`:**

Prefer `outline` with `outline-offset` over Tailwind's `ring` utilities. CSS now supports `outline-offset`, making `outline` the simpler and more standard approach.

```tsx
// ✅ Preferred — uses native CSS outline with offset
'focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2'

// ❌ Avoid — ring is a Tailwind abstraction using box-shadow
'focus-visible:ring-2 focus-visible:ring-offset-2'
```

**Group focus states:**

For card-like components with an invisible stretched link, show focus on a visible child using named groups:

```tsx
// Link stretches over entire card — focus:outline-none removes default, no visible outline on link itself
<ProductCardPrimitive.Link className="absolute inset-0 focus:outline-none" />

// Thumbnail shows focus indicator when link is focused via group selector
<ProductCardPrimitive.Thumbnail className="group-focus-visible/product-card:outline-2 group-focus-visible/product-card:outline-offset-2" />
```
