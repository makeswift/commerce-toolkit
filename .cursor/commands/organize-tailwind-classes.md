# Organize Tailwind Classes

You are helping to organize Tailwind CSS class strings into readable, maintainable code. The level of organization depends on the complexity of the component.

## When to Use Which Approach

### Simple Format (1-2 lines)
Use when the className has:
- **Fewer than ~15 total classes**, OR
- **Minimal state variants** (0-1 state variants with just 1-2 classes each)

Keep all classes on one line, or split into two lines (base + states) if it improves readability.

### Detailed Grouping (multiple commented sections)
Use when the className has:
- **3+ state variants**, OR
- **Any state variant with 3+ classes**, OR
- **Complex modifiers** (e.g., `group-data-[*]`, multiple breakpoints per variant)

Break into multiple commented sections for better maintainability.

## Grouping Strategy

Organize classes into logical groups in this order (skip groups that don't apply):

1. **Base styles** (no comment) - layout, spacing, typography, colors, borders, effects, transitions all on one line:
   - Layout: `inline-flex`, `flex`, `grid`, `absolute`, `relative`, `h-*`, `w-*`, `items-*`, `justify-*`, `gap-*`
   - Spacing: `p-*`, `px-*`, `py-*`, `m-*`, `mx-*`, `my-*`
   - Typography: `text-*`, `font-*`, `leading-*`, `tracking-*`, `whitespace-*`
   - Colors: `bg-*`, `text-*`, `border-*`
   - Borders & Rounded: `border`, `border-*`, `rounded-*`
   - Effects: `shadow-*`, `opacity-*`, `ring-*`
   - Transitions: `transition-*`, `duration-*`, `animate-*`
2. **Hover state** - `hover:*` classes
3. **Focus state** - `focus:*` classes
4. **Focus-visible state** - `focus-visible:*` classes
5. **Active state** - `active:*` classes
6. **Open/Closed state** - `data-[state=open]:*`, `data-[state=closed]:*` classes
7. **Motion state** - `data-[motion*]:*` classes
8. **Disabled state** - `disabled:*` classes
9. **Group/Peer states** - `group-*:`, `peer-*:` classes
10. **Responsive** - breakpoint prefixes (`sm:*`, `md:*`, `lg:*`, `xl:*`, `2xl:*`)
11. **Container queries** - `@*:` classes

## Simple Format Examples

For simple components, keep classes concise:

### Single line (very simple)

```tsx
className={cn('truncate text-sm font-semibold text-foreground', className)}
```

### Two lines (simple with minimal states)

```tsx
className={cn(
  'flex items-center gap-1 rounded-md px-2 py-1 text-sm transition-colors',
  'hover:bg-accent disabled:opacity-50',
  className,
)}
```

## Detailed Format Examples

For complex components with many interactive states, use commented groupings:

### Standard detailed format

Use the `cn()` function with base styles on an uncommented first line, then state variants with comments:

```tsx
className={cn(
  'inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium bg-background transition-colors duration-200',
  // Hover state
  'hover:bg-accent hover:text-accent-foreground',
  // Focus state
  'focus:bg-accent focus:text-accent-foreground',
  // Focus-visible state
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring',
  // Disabled state
  'disabled:pointer-events-none disabled:opacity-50',
  className,
)}
```

## Real-World Examples

### Simple component (FileInputHeader)

```tsx
<div
  className={cn(
    'flex items-center gap-1 [font-family:var(--file-input-font-header,var(--font-body))]',
    className,
  )}
  data-slot="file-input-header"
>
  {children}
</div>
```

### Complex component (NavigationMenuTrigger)

```tsx
<NavigationMenuPrimitive.Trigger
  className={cn(
    'group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium outline-none transition-[color,box-shadow]',
    // Hover state
    'hover:bg-contrast-100 hover:text-foreground',
    // Focus state
    'focus:bg-contrast-100 focus:text-foreground',
    // Focus-visible state
    'focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:ring-[3px]',
    // Open state
    'data-[state=open]:bg-contrast-100/50 data-[state=open]:text-foreground',
    'data-[state=open]:hover:bg-contrast-100 data-[state=open]:focus:bg-contrast-100',
    // Disabled state
    'disabled:pointer-events-none disabled:opacity-50',
    className,
  )}
/>
```

## Rules

1. **Assess complexity first** - Count total classes and state variants to determine whether to use simple or detailed format
2. **Preserve all classes** - Don't remove or modify any classes, just reorganize them
3. **Keep related classes together** - If there are multiple classes for the same state (e.g., `hover:bg-*` and `hover:text-*`), keep them on the same line
4. **End with className prop** - Always end with `className,` to allow external overrides
5. **For detailed format only:**
   - No comment for base styles - The first line with base styles should have no comment
   - Use consistent comment style - Use `// Comment` format for state variant group labels
   - Split long state groups - If a state group has many classes, split into multiple lines under the same comment section
   - Alphabetize within variants - When multiple data attributes or modifiers exist, prefer alphabetical order (e.g., `data-[state=closed]` before `data-[state=open]`)

## Handling Complex Modifiers

For complex modifiers like `group-data-[viewport=false]/navigation-menu:*`, create a section header comment and group related styles:

```tsx
// === Viewport=false styles (inline dropdown mode) ===
// Positioning
'group-data-[viewport=false]/navigation-menu:top-full group-data-[viewport=false]/navigation-menu:mt-1.5',
// Colors
'group-data-[viewport=false]/navigation-menu:bg-popover group-data-[viewport=false]/navigation-menu:text-popover-foreground',
// Container styling
'group-data-[viewport=false]/navigation-menu:rounded-md group-data-[viewport=false]/navigation-menu:border',
```

## Quick Decision Guide

Ask yourself:
1. Are there **15+ total classes**? → Likely needs detailed format
2. Are there **3+ different state variants** (hover, focus, disabled, etc.)? → Use detailed format
3. Does any single state variant have **3+ classes**? → Use detailed format
4. Otherwise → Use simple format (1-2 lines)
