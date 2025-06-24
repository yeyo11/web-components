// Exportar Button desde lit
export { Button } from './components/button.component';

// Exportar tipos útiles
export interface ComponentEvent<T = unknown> extends CustomEvent<T> {
  detail: T;
}

// Declaraciones globales para TypeScript
import { Button } from './components/button.component';

declare global {
  interface HTMLElementTagNameMap {
    'my-button': Button;
  }
}