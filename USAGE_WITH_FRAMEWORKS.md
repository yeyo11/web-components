# Usage with React + TypeScript

If you use this library in a React project with TypeScript and want to avoid typing errors when using custom elements, create a file named `custom-elements.d.ts` in your React project with the following content:

```typescript
import type * as React from 'react';
import type { Button } from '@yeyo11/my-web-components';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'yeyo-button': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & Partial<Button>;
    }
  }
}
```

This will allow TypeScript to recognize `<yeyo-button />` as a valid element in JSX.

---

# Usage with Angular

Your Web Components work natively in Angular. You just need to:

1. **Import your library bundle** in `main.ts` or in the component where you need it:
   ```typescript
   import '@yeyo11/my-web-components';
   ```

2. **Add the `CUSTOM_ELEMENTS_SCHEMA` schema** in the module where you use the components:
   ```typescript
   import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

   @NgModule({
     declarations: [ ... ],
     imports: [ ... ],
     schemas: [CUSTOM_ELEMENTS_SCHEMA],
   })
   export class AppModule {}
   ```

3. **Use the component in your Angular templates**:
   ```html
   <yeyo-button label="Hello from Angular!"></yeyo-button>
   ```

This will prevent compilation errors and allow you to use your Web Components seamlessly in Angular.
