# App Structure

Use this layout to keep ERP features isolated and cross-cutting code easy to find.

## Folder Map

```text
src/app/
  core/           app-wide singleton concerns
  features/       business domains such as dashboard, sales, inventory
  layouts/        reusable page and shell layouts
  shared/         reusable UI and helper code used across multiple features
```

## Placement Rules

- Put feature-specific components in `features/<feature>/components`.
- Put route-level pages in `features/<feature>/pages`.
- Put feature-only services in `features/<feature>/services`.
- Put feature domain types in `features/<feature>/types`.
- Put app-wide singleton services, guards, interceptors, tokens, and state in `core`.
- Put reusable UI primitives, directives, pipes, form helpers, utility functions, and shared types in `shared`.
- Put layout components such as shell, topbar, sidenav, and authenticated wrappers in `layouts`.

## Recommended Conventions

- Keep each feature self-contained and avoid importing from other features directly.
- Prefer standalone components and lazy-loaded feature routes.
- Keep shared code generic. If code starts depending on one feature's business rules, move it back into that feature.
- Keep types close to the feature that owns the data contract.