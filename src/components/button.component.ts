import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('my-button')
export class Button extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
    }
    button {
      border: none;
      border-radius: 6px;
      padding: 8px 16px;
      font-size: 14px;
      font-weight: 500;
      cursor: pointer;
      transition: all 0.2s ease;
      outline: none;
    }
    button:focus {
      box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.5);
    }
    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    .primary {
      background-color: #3b82f6;
      color: white;
    }
    .primary:hover:not(:disabled) {
      background-color: #2563eb;
    }
    .secondary {
      background-color: #f3f4f6;
      color: #374151;
      border: 1px solid #d1d5db;
    }
    .secondary:hover:not(:disabled) {
      background-color: #e5e7eb;
    }
    .danger {
      background-color: #ef4444;
      color: white;
    }
    .danger:hover:not(:disabled) {
      background-color: #dc2626;
    }
  `;

  @property({ type: String })
  label: string = 'Button';

  @property({ type: String })
  variant: 'primary' | 'secondary' | 'danger' = 'primary';

  @property({ type: Boolean, reflect: true })
  disabled: boolean = false;

  protected render() {
    return html`
      <button
        class="${this.variant}"
        ?disabled="${this.disabled}"
        @click="${this.handleClick}"
      >
        ${this.label}
      </button>
    `;
  }

  private handleClick(event: Event) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    this.dispatchEvent(new CustomEvent('my-click', {
      detail: {
        originalEvent: event,
        label: this.label,
        variant: this.variant
      },
      bubbles: true,
      composed: true
    }));
  }
}