// Exportar Button desde lit
export { Button } from './components/button.component';

// Exportar tipos útiles
export interface ComponentEvent<T = any> extends CustomEvent<T> {
  detail: T;
}

// Declaraciones globales para TypeScript
declare global {
  interface HTMLElementTagNameMap {
    'yeyo-button': import('./components/button.component').Button;
  }
}