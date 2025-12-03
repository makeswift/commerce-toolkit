# Pre-Publish Checklist

## Overview

Run through this checklist before publishing changes to the commerce-toolkit library. This ensures code quality, proper versioning, and that the package will work correctly for consumers.

## Steps

### 1. Code Quality

Run linting and formatting checks:

```bash
pnpm lint
pnpm format:check
```

Fix any issues before proceeding:

```bash
pnpm format
```

### 2. Build the Library

Ensure the library builds without errors:

```bash
pnpm build:lib
```

Verify the build output:

- Check that `dist/index.js` and `dist/index.cjs` exist
- Check that `dist/index.d.ts` exists with correct type exports
- For components with primitives, verify subpath entries exist (e.g., `dist/accordion.js`)

### 3. Test Exports

Verify the package exports work correctly:

```bash
node -e "
import('./dist/index.js').then(m => {
  console.log('✓ Main exports:', Object.keys(m).length, 'items');
});
"
```

Test a subpath export:

```bash
node -e "
import('./dist/accordion.js').then(m => {
  console.log('✓ Accordion primitives:', Object.keys(m).join(', '));
});
"
```

### 4. Storybook Verification

If you've added or modified components, ensure Storybook works:

```bash
pnpm story
```

Check that:

- [ ] New components have stories
- [ ] Modified components still render correctly
- [ ] No console errors in Storybook

### 5. Create Changeset

If this is a publishable change, create a changeset:

```bash
pnpm changeset
```

Follow the prompts:

1. Select the package(s) affected
2. Choose the bump type:
   - **patch**: Bug fixes, documentation updates
   - **minor**: New features, non-breaking changes
   - **major**: Breaking changes
3. Write a clear summary of changes

### 6. Verify Package.json Exports

Ensure `package.json` exports are correctly configured:

- The `"exports"` field should include all entry points
- Each export should have both `import` and `require` conditions
- Types should be specified with the `"types"` condition

### 7. Final Verification

Run the full build one more time:

```bash
pnpm build:lib
```

## Quick Commands

Run all checks at once:

```bash
pnpm lint && pnpm format:check && pnpm build:lib
```

## Checklist

- [ ] `pnpm lint` passes
- [ ] `pnpm format:check` passes
- [ ] `pnpm build:lib` succeeds
- [ ] Type definitions are generated correctly
- [ ] All exports resolve (main + subpaths)
- [ ] Storybook renders without errors (if applicable)
- [ ] Changeset created (if publishable change)
- [ ] Changes committed to branch

## Common Issues

### Missing exports

If a subpath export fails, check:

1. The `primitives.ts` file exists in the component folder
2. The entry is added to `vite.config.lib.js`
3. The export is defined in `package.json`

### Type errors

If types fail to generate:

1. Run `tsc --project tsconfig.lib.json` separately to see errors
2. Check for circular imports
3. Ensure all imports use correct paths

### Build failures

If the build fails:

1. Check for imports from `@/index` in primitives (causes circular deps)
2. Verify all component files exist
3. Check for TypeScript errors in source files
