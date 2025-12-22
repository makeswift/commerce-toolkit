# Organize Tailwind Classes

You are helping to organize long Tailwind CSS class strings into readable, grouped lines. Take a single long className string and break it into multiple lines within a `cn()` function call, with comments indicating the purpose of each group.

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

## Output Format

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

## Example Reference

Here's a well-organized component to use as a reference:

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

1. **Preserve all classes** - Don't remove or modify any classes, just reorganize them
2. **No comment for base styles** - The first line containing all base styles (layout, spacing, typography, colors, borders, effects, transitions) should have no comment
3. **Keep related classes together** - If there are multiple classes for the same state (e.g., `hover:bg-*` and `hover:text-*`), keep them on the same line
4. **Use consistent comment style** - Use `// Comment` format for state variant group labels
5. **End with className prop** - Always end with `className,` to allow external overrides
6. **Split long state groups** - If a state group has many classes, split into multiple lines under the same comment section
7. **Alphabetize within variants** - When multiple data attributes or modifiers exist, prefer alphabetical order (e.g., `data-[state=closed]` before `data-[state=open]`)

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
