# Create a Storybook example prompt

## Story structure

Each story should start with a Docs page that gives the examples and a breakdown of the API and how they work. This would also include the CSS variables for each component listed at the top.

## Composable Components vs Monolith Components

Our components provide a Monolith component and Composable components. You should provide an example of the "Composable Anatomy" that outlines how users can use the Composable components to build their own custom Monolith components. Components that do not have Composable components do not have a primitives folder. The Button components is an example of one.

## Limit custom Tailwind classes

Our composable components allow for custom CSS classes to be passed in to override styles, but do not override styles in your examples since we do not want to give the impression that the user has to do this when using our components. Instead, this should be an escape hatch if the user truly needs to build something custom.

## Example depth

Do not provide too many examples. Focus on examples that highlight the monolith component and the interface it exposes. A composable example that simply highlights how to use them is fine, but try and limit the amount of customization.

## Code preview source

Stories using `render` functions (especially with hooks like `useState`) show the raw story object in Storybook's "Show code" feature. To display clean React code instead, add a `source` parameter:

```tsx
export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story: 'A controlled component example.',
      },
      source: {
        code: `
const [value, setValue] = useState(false);

<Component checked={value} onChange={setValue} />
        `,
      },
    },
  },
  render: () => {
    const [value, setValue] = useState(false);

    return <Component checked={value} onChange={setValue} />;
  },
};
```

Always include `source.code` for stories that use `render` functions to ensure users see clean, copyable React code.

## Container queries

Components that use container queries (identified by `@container` class on the root and `@` prefixed breakpoints like `@lg:text-xl`) should document their responsive behavior. Include:

1. **Documentation table** - Add a table in the component description showing what changes at each breakpoint:

```markdown
## Container Queries

The component uses container queries to adapt based on container width.

| Element | Below @lg | @lg and above |
|---------|-----------|---------------|
| Title | text-base | text-xl |
| Content | text-sm | text-base |
```

2. **ContainerQueries story** - Create a story showing the component at different container sizes side by side:

```tsx
export const ContainerQueries: Story = {
  render: () => (
    <div className="flex flex-col gap-8">
      <div>
        <p className="mb-2 text-sm text-contrast-400">Small container (below @lg breakpoint)</p>
        <div className="w-72">
          <Component {...props} />
        </div>
      </div>
      <div>
        <p className="mb-2 text-sm text-contrast-400">Large container (at @lg breakpoint)</p>
        <div className="w-[32rem]">
          <Component {...props} />
        </div>
      </div>
    </div>
  ),
};
```

### Tailwind container query breakpoints

Use these default breakpoint widths when sizing containers:

| Breakpoint | Width |
|------------|-------|
| `@xs` | 20rem (320px) |
| `@sm` | 24rem (384px) |
| `@md` | 28rem (448px) |
| `@lg` | 32rem (512px) |
| `@xl` | 36rem (576px) |
| `@2xl` | 42rem (672px) |
| `@3xl` | 48rem (768px) |
| `@4xl` | 56rem (896px) |
| `@5xl` | 64rem (1024px) |
| `@6xl` | 72rem (1152px) |
| `@7xl` | 80rem (1280px) |

## Product images

Below are some product names and images you can use for examples:

- Natural Fiber Scrub Brush  
  https://images.unsplash.com/photo-1685052392951-4eb54985d3ae?w=900  
  $8.99

- Eco Dish Sponge Set (2-Pack)  
  https://images.unsplash.com/photo-1685052391251-e09402a6b8e8?w=900  
  $6.49

- Wood Handle Cleaning Brush  
  https://images.unsplash.com/photo-1682251008222-412b140cbf4f?w=900  
  $9.99

- Minimal Ceramic Soap Dispenser  
  https://images.unsplash.com/photo-1597816189341-6ed558ab017e?w=900  
  $18.00

- Glass Soap Pump Bottle  
  https://images.unsplash.com/photo-1606448009227-af1758630e60?w=900  
  $14.50

- Linen Hand Towel  
  https://images.unsplash.com/photo-1599305090598-fe179d501227?w=900  
  $12.00

- Stoneware Soap Tray  
  https://images.unsplash.com/photo-1619451334792-150fd785ee74?w=900  
  $16.00

- Reusable Cleaning Cloths (3-Pack)  
  https://images.unsplash.com/photo-1619451427882-6aaaded0cc61?w=900  
  $11.99

- Bamboo Countertop Brush  
  https://images.unsplash.com/photo-1590439471364-192aa70c0b53?w=900  
  $10.50

- Amber Glass Spray Bottle  
  https://images.unsplash.com/photo-1638609927127-aeb9e74c3cfd?w=900  
  $13.00

- Natural Loofah Sponge  
  https://images.unsplash.com/photo-1638609269267-f0128098a809?w=900  
  $5.99

- Minimal Bathroom Storage Jar  
  https://images.unsplash.com/photo-1664815122586-05fe094fb536?w=900  
  $17.50

- Wooden Dish Drying Brush  
  https://images.unsplash.com/photo-1662578108849-6f75d4f8c280?w=900  
  $9.50

- Cotton Waffle Hand Towel  
  https://images.unsplash.com/photo-1626897844961-c15509dde465?w=900  
  $14.00

- Plant-Based Scrubber Pad  
  https://images.unsplash.com/photo-1685052386750-902a081b99da?w=900  
  $4.99

- Eco Cleaning Starter Kit  
  https://images.unsplash.com/photo-1685052392996-5c042ab4c170?w=900  
  $29.00

- Refillable Soap Bottle (Clear Glass)  
  https://images.unsplash.com/photo-1589365252845-092198ba5334?w=900  
  $15.00

- Natural Cleaning Essentials Set  
  https://images.unsplash.com/photo-1551239330-2db25ffa5e90?w=900  
  $34.00
