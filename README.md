# Commerce Toolkit

A collection of modern, accessible commerce UI components built with React, TypeScript, and Tailwind CSS.

## Requirements

- React 18+ or 19+
- Tailwind CSS 3+

## Installation

```bash
npm install commerce-toolkit
# or
yarn add commerce-toolkit
# or
pnpm add commerce-toolkit
```

Install the optional Tailwind plugins (recommended):

```bash
npm install -D @tailwindcss/container-queries @tailwindcss/typography tailwindcss-animate
```

## Setup

### 1. Configure Tailwind

Add the Commerce Toolkit preset and content path to your `tailwind.config.js`:

```js
import commerceToolkit from 'commerce-toolkit/tailwind';

export default {
  presets: [commerceToolkit],
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/commerce-toolkit/dist/**/*.{js,mjs}', // Add this line
  ],
  // ... your other config
};
```

### 2. Import Base Styles

Import the CSS variables in your JavaScript/TypeScript (recommended):

```tsx
// app/layout.tsx (Next.js) or main.tsx (Vite/React)
import 'commerce-toolkit/styles';
```

Or if importing in CSS, it must come **before** the Tailwind directives:

```css
/* app.css or globals.css */
@import 'commerce-toolkit/styles';

@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 3. Use Components

```tsx
import { Button } from 'commerce-toolkit';

function App() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
      <Button variant="secondary" size="small">
        Small Button
      </Button>
    </div>
  );
}
```

## Using Tailwind Utilities

Once configured, you can use all the custom Tailwind utilities from Commerce Toolkit:

```tsx
<div className="bg-primary text-background">
  <h1 className="font-heading text-foreground">Hello World</h1>
  <p className="text-contrast-400">This uses the design system colors!</p>
</div>
```

**Available color utilities:**

- `bg-primary`, `text-primary`, `border-primary`
- `bg-accent`, `text-accent`, etc.
- `bg-success`, `bg-error`, `bg-warning`, `bg-info`
- `bg-background`, `bg-foreground`
- `bg-contrast-100` through `bg-contrast-500`

And many more custom utilities for typography, animations, and effects.

## Customization

Override CSS variables to customize the design system:

```css
/* app/globals.css */
@import 'commerce-toolkit/styles';

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --primary: 220 100% 50%; /* HSL: hue saturation lightness */
  --foreground: 0 0% 7%;
  --background: 0 0% 100%;
  /* ... override any variables */
}
```

**Recommended:** Import styles in JavaScript and override variables in CSS:

```tsx
// app/layout.tsx
import 'commerce-toolkit/styles';
```

```css
/* app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --primary: 220 100% 50%;
  /* ... your custom values */
}
```

## Documentation

For detailed component documentation, examples, and interactive demos, visit our [Storybook](https://makeswift.github.io/commerce-toolkit).

## TypeScript

Full TypeScript support with included type definitions.

## License

MIT
