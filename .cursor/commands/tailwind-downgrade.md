# Tailwind 4 to Tailwind 3 Downgrade Prompt

You are helping to downgrade React components from Tailwind CSS v4 to v3. Apply these conversions:

## Utility Class Renames

Some utility classes were renamed in Tailwind 4. Below is a guide for you to follow to rename some of these values from Tailwind 4 syntax to Tailwind 3 syntax.

- `shadow-xs` → `shadow-sm`
- `shadow-sm` → `shadow`
- `drop-shadow-xs` → `drop-shadow-sm`
- `drop-shadow-sm` → `drop-shadow`
- `blur-xs` → `blur-sm`
- `blur-sm` → `blur`
- `backdrop-blur-xs` → `backdrop-blur-sm`
- `backdrop-blur-sm` → `backdrop-blur`
- `rounded-xs` → `rounded-sm`
- `rounded-sm` → `rounded`
- `outline-hidden` → `outline-none`
- `ring-3` → `ring`

## Variables in aritrary values

In Tailwind 4, arbitrary values that use CSS variables could be wrapped with "()". However, this syntax is not supported in Tailwind 3 and should be updated to wrap with "[]".

Below is an example:

- `<div class="bg-(--brand-color)"></div>` → `<div class="bg-[--brand-color]"></div>`

Sometimes you may come across examples that use a fallback value for CSS variables. When that's the case, you'll need to change "()" with "[]" and also wrap the fallback with the hsl color function.

Below is an example:

- `bg-(--dropdown-menu-background,var(--background))` → `bg-[var(--dropdown-menu-background,hsl(var(--background)))]`

## Highlight and Shadow variants

The following CSS variables are included in the Tailwind 4 version:

- `--success-highlight`
- `--success-shadow`
- `--warning-highlight`
- `--warning-shadow`
- `--error-highlight`
- `--error-shadow`
- `--info-highlight`
- `--info-highlight`

However, in Tailwind 3 we do not have these CSS variables defined. Therefore, when you come across a class name that uses one of these CSS variables it needs to be converted for Tailwind 3 like this:

- `bg-(--alert-success-background,var(--success-highlight))` → `bg-[var(--alert-success-background,color-mix(in_oklab,_hsl(var(--success)),_white_75%))]`
- `text-(--form-status-light-text-success,var(--success-shadow))` → `text-[var(--form-status-light-text-success,color-mix(in_oklab,hsl(var(--success)),black_75%))]`
