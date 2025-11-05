# Using Changesets

Changesets is set up with **automated releases** via GitHub Actions!

## Automated Workflow (Default)

This is how releases work with the GitHub Actions automation already configured:

### 1. Make Your Changes

Work on your feature/fix as normal:

```bash
# Create a new component, fix a bug, etc.
git checkout -b feature/new-select-component
# ... make your changes ...
```

### 2. Create a Changeset

When you're done, describe what changed:

```bash
pnpm changeset
```

This will prompt you:

```
🦋  Which packages would you like to include?
› ◉ commerce-toolkit

🦋  What kind of change is this for commerce-toolkit?
  ○ major (breaking change)
  ○ minor (new feature)
  ● patch (bug fix)

🦋  Please enter a summary for this change:
│ Added new Select component with keyboard navigation support
```

This creates a file in `.changeset/` describing your change.

### 3. Commit & Push Everything

```bash
git add .
git commit -m "Add Select component"
git push
```

**Important:** Commit the changeset file along with your code!

### 4. GitHub Automation Takes Over

When your changeset(s) are merged to `main`, the GitHub Action automatically:

1. **Creates a "Version Packages" PR** that:
   - Updates `package.json` version
   - Generates/updates `CHANGELOG.md`
   - Removes the consumed changeset files

2. **When you merge that PR**, it automatically:
   - Publishes to npm
   - Creates a git tag
   - Everything is done for you!

That's it! No manual publishing needed.

## Examples

### Bug Fix (Patch: 0.1.0 → 0.1.1)

```bash
pnpm changeset
# Select: patch
# Summary: "Fixed Button focus ring on Safari"
```

### New Feature (Minor: 0.1.0 → 0.2.0)

```bash
pnpm changeset
# Select: minor
# Summary: "Added new Select component with full accessibility support"
```

### Breaking Change (Major: 0.1.0 → 1.0.0)

```bash
pnpm changeset
# Select: major
# Summary: "Renamed Button 'variant' prop to 'color' for consistency"
```

## Multiple Changes at Once

You can create multiple changesets before releasing:

```bash
# Fix a bug
pnpm changeset
# > patch: "Fixed Button disabled state"

# Add a feature
pnpm changeset
# > minor: "Added Input component"

# Add another feature
pnpm changeset
# > minor: "Added Card component"

# Commit and push all changesets
git add .
git commit -m "Multiple improvements"
git push

# GitHub Actions will bundle them all into one release version
# The "Version Packages" PR will show v0.2.0 with all changes in the changelog
```

## The Generated CHANGELOG

Changesets will automatically create/update `CHANGELOG.md`:

```md
# commerce-toolkit

## 0.2.0

### Minor Changes

- a1b2c3d: Added Input component with validation
- d4e5f6g: Added Card component with variants

### Patch Changes

- h7i8j9k: Fixed Button disabled state on mobile

## 0.1.0

### Minor Changes

- Initial release with Button component
```

## Advanced: Detailed Changesets

You can write more detailed changesets by editing the generated `.md` files:

```bash
pnpm changeset
# Creates .changeset/brave-wolves-dance.md
```

Edit the file for more detail:

```md
---
'commerce-toolkit': minor
---

Added new Select component

This component includes:

- Full keyboard navigation
- Screen reader support
- Multi-select mode
- Custom styling via CSS variables

Breaking changes:

- None

Migration guide:

- Simply import and use: `import { Select } from 'commerce-toolkit'`
```

## Tips

1. **One changeset per PR/feature** - Makes it easy to track what changed
2. **Be descriptive** - The summary goes into the changelog (your users will see this!)
3. **Use semantic versioning correctly**:
   - **Patch**: Bug fixes only
   - **Minor**: New features, backward compatible
   - **Major**: Breaking changes
4. **Review the Version Packages PR** - Before merging, check the changelog and version bump are correct

## GitHub Actions Configuration

The automated release workflow is already configured in `.github/workflows/release.yml`:

```yaml
name: Release

on:
  push:
    branches:
      - main

concurrency: ${{ github.workflow }}-${{ github.ref }}

jobs:
  release:
    name: Release
    runs-on: ubuntu-latest
    steps:
      - name: Checkout Repo
        uses: actions/checkout@v4

      - name: Setup pnpm
        uses: pnpm/action-setup@v4
        with:
          version: 9

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: 'pnpm'

      - name: Install Dependencies
        run: pnpm install --frozen-lockfile

      - name: Create Release Pull Request or Publish to npm
        id: changesets
        uses: changesets/action@v1
        with:
          publish: pnpm release
          title: 'chore: version packages'
          commit: 'chore: version packages'
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
```

This workflow:

- Runs on every push to `main`
- Creates a "Version Packages" PR when changesets are present
- Automatically publishes to npm when that PR is merged

## Manual Release (Alternative)

If you ever need to publish manually without the GitHub Action:

```bash
# 1. Consume changesets and update versions
pnpm version

# 2. Review the changes
git log -p

# 3. Commit the version changes
git add .
git commit -m "chore: version packages"

# 4. Publish to npm
pnpm release

# 5. Push everything with tags
git push --follow-tags
```

**Note:** This manual process will conflict with the automated workflow, so only use it if you've disabled the GitHub Action.
