# openfaas-bun-function

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v0.6.6. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

## openfaas

To deploy run

```bash
bun run up
```

### Docker

To create a docker image from the openfaas dockerfile:

```bash
bun run docker:build
```

To run it:

```bash
bun run docker:run
```
