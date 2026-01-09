I'm rebasing my project and have a lot of conflicts to resolve. Most of the conflicts
are from recent changes to CSS variables being renamed and simplifying how fallback
variables are being passed into Tailwind classes.

## Current Changes

### Renamed CSS vars

For example, you may see a current change like this:

--accordion-focus: var(--brand);

And in the incoming change like this:

--accordion-focus: var(--primary);

This above example is because we've renamed the --primary CSS variable to --brand.

### Simplified fallbacks inside Tailwind

There were some changes merged that simplified how we use inline and fallback variables
in Tailwind classes.

For example, you'll see classes like this in incoming changes:

stroke-[var(--accordion-light-title-icon,hsl(var(--contrast-500)))]

However, this has been simplified in current changes:

stroke-[var(--accordion-light-title-icon,var(--contrast-500))]

You'll notice that we're no longer needing to wrap the fallback in hsl() and can pass
the variable directly.

## Incoming changes

The incoming change are from making sure consistent patterns are being applied 
across all of our components. This includes things like organizing classes, applying
Class Variance Authority, and ensuring component architecture like monolith 
and composable components.

## Your task

Your task is to identify the current changes that need to be applied to the incoming
changes.