# Core

Use `core` for application-wide singletons and cross-cutting runtime concerns.

- `guards/`: route guards such as auth or permission checks
- `interceptors/`: HTTP interceptors
- `services/`: singleton services shared across the app
- `state/`: app-level signals and orchestration state
- `tokens/`: injection tokens and providers
- `types/`: global app contracts that are not owned by one feature