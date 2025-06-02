# NextJS Multi-lang App (Basic)

| Statements                                                                         | Branches                                                                       | Functions                                                                        | Lines                                                                    |
| ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | -------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| ![Statements](https://img.shields.io/badge/statements-37.09%25-red.svg?style=flat) | ![Branches](https://img.shields.io/badge/branches-61.01%25-red.svg?style=flat) | ![Functions](https://img.shields.io/badge/functions-37.77%25-red.svg?style=flat) | ![Lines](https://img.shields.io/badge/lines-37.81%25-red.svg?style=flat) |

## Requirements

- Node.js 20.x
- PNPM 9.15.5+

## Localization

This project uses `next-intl` for localization messages and routing.

## Dev Docker

This sections describes how to run the local development environment using Docker.

> _**Note:**_
>
> 1. _This is not required option, you can run the project locally without Docker_
> 2. _For this option you need to have `make` and `docker`_

### Commands

- `make dev-up` will build the Docker image, run dev container and enter to the container.
- `make dev-exec` enters to running container.
- `make dev-down` stops and removes the running container.

---

<!-- COREPACK_ENABLE_STRICT=0 pnpm run codegen:introspect -->
