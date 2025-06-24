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
