# Create PR

## Overview

Create a well-structured pull request following the project's PR template.

## Steps

1. **Prepare branch**
   - Ensure all changes are committed
   - Ensure changeset is created: `pnpm changeset`
   - Push branch to remote
   - Verify branch is up to date with main

2. **Write PR description**

   Follow the template structure:

   ### What / Why
   - Describe what changed
   - Explain why this change was needed
   - List any breaking changes
   - Add screenshots if UI changes

   ### Testing
   - How you tested this change
   - Steps to verify the fix/feature
   - Any edge cases covered

3. **Set up PR**
   - Create PR with descriptive title
   - Add appropriate labels (if any)
   - Assign reviewers
   - Link related issues

## Checklist

- [ ] Changeset created (if applicable)
- [ ] Branch up to date with main
- [ ] All changes committed and pushed
- [ ] PR description follows template
- [ ] Testing instructions provided
