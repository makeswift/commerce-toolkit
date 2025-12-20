# Organize Tailwind Classes

You are helping to organize long Tailwind CSS class strings into readable, grouped lines. Take a single long className string and break it into multiple lines within a `cn()` function call, with comments indicating the purpose of each group.

## Grouping Strategy

Organize classes into logical groups in this order (skip groups that don't apply):

1. **Base layout** - display, flex, grid, positioning, sizing (`inline-flex`, `flex`, `grid`, `absolute`, `relative`, `h-*`, `w-*`, `items-*`, `justify-*`, `gap-*`)
2. **Spacing** - padding, margin (`p-*`, `px-*`, `py-*`, `m-*`, `mx-*`, `my-*`)
3. **Typography** - font, text (`text-*`, `font-*`, `leading-*`, `tracking-*`, `whitespace-*`)
4. **Colors** - background, text color, border color (`bg-*`, `text-*`, `border-*`)
5. **Borders & Rounded** - border width, radius (`border`, `border-*`, `rounded-*`)
6. **Effects** - shadow, opacity, ring (`shadow-*`, `opacity-*`, `ring-*`)
7. **Transitions** - transition, duration, animation (`transition-*`, `duration-*`, `animate-*`)
8. **Hover state** - `hover:*` classes
9. **Focus state** - `focus:*` classes
10. **Focus-visible state** - `focus-visible:*` classes
11. **Active state** - `active:*` classes
12. **Open/Closed state** - `data-[state=open]:*`, `data-[state=closed]:*` classes
13. **Motion state** - `data-[motion*]:*` classes
14. **Disabled state** - `disabled:*` classes
15. **Group/Peer states** - `group-*:`, `peer-*:` classes
16. **Responsive** - breakpoint prefixes (`sm:*`, `md:*`, `lg:*`, `xl:*`, `2xl:*`)
17. **Container queries** - `@*:` classes

## Output Format

Use the `cn()` function with each group on its own line, preceded by a comment:

```tsx
className={cn(
  // Base layout
  'inline-flex items-center justify-center rounded-md px-4 py-2',
  // Typography
  'text-sm font-medium',
  // Background
  'bg-background',
  // Transitions
  'transition-colors duration-200',
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
    // Base layout
    'group inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2',
    // Typography
    'text-sm font-medium',
    // Background
    'bg-background',
    // Transitions
    'outline-none transition-[color,box-shadow]',
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
2. **Keep related classes together** - If there are multiple classes for the same state (e.g., `hover:bg-*` and `hover:text-*`), keep them on the same line
3. **Use consistent comment style** - Use `// Comment` format for group labels
4. **End with className prop** - Always end with `className,` to allow external overrides
5. **Split long state groups** - If a state group has many classes, split into multiple lines under the same comment section
6. **Alphabetize within variants** - When multiple data attributes or modifiers exist, prefer alphabetical order (e.g., `data-[state=closed]` before `data-[state=open]`)

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
