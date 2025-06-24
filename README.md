# Web Components Project

This project is a collection of custom web components built using TypeScript. The components are designed to be reusable and easily integrated into any web application.

## Features
- Written in TypeScript for type safety and maintainability
- Modular structure for easy extension
- Includes a customizable button component

## Project Structure
```
web-components/
├── package.json
├── pnpm-lock.yaml
├── tsconfig.json
└── src/
    ├── index.ts
    └── components/
        └── button.component.ts
```

- `src/index.ts`: Entry point for the components library.
- `src/components/button.component.ts`: Implementation of a custom button web component.

# Usage with React and Angular

See [`USAGE_WITH_FRAMEWORKS.md`](./USAGE_WITH_FRAMEWORKS.md) for detailed instructions on how to use this library with React (including TypeScript support) and Angular.

- React: Type-safe usage with custom elements in JSX
- Angular: Schema configuration and usage in templates

This ensures smooth integration of your Web Components in modern UI frameworks.

## Getting Started

### Installation

Install dependencies using [pnpm](https://pnpm.io/):

```sh
pnpm install
```

### Building

To build the project, run:

```sh
pnpm build
```

### Usage

Import the desired component in your project and use it as a custom HTML element:

```html
<custom-button>Click Me</custom-button>
```

## License

This project is licensed under the MIT License.
