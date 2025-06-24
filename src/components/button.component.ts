import { LitElement, html, css, PropertyValues } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('yeyo-button')
export class Button extends LitElement {
  static styles = css`
    :host {
      display: inline-block;
      --yeyo-btn-bg: var(--yeyo-btn-bg, #3b82f6);
      --yeyo-btn-bg-hover: var(--yeyo-btn-bg-hover, #2563eb);
      --yeyo-btn-color: var(--yeyo-btn-color, #fff);
      --yeyo-btn-border: var(--yeyo-btn-border, none);
      --yeyo-btn-radius: var(--yeyo-btn-radius, 6px);
      --yeyo-btn-padding: var(--yeyo-btn-padding, 8px 16px);
      --yeyo-btn-font-size: var(--yeyo-btn-font-size, 14px);
      --yeyo-btn-font-weight: var(--yeyo-btn-font-weight, 500);
      --yeyo-btn-transition: var(--yeyo-btn-transition, all 0.2s ease);
      --yeyo-btn-shadow-focus: var(--yeyo-btn-shadow-focus, 0 0 0 2px rgba(59, 130, 246, 0.5));
      --yeyo-btn-disabled-opacity: var(--yeyo-btn-disabled-opacity, 0.5);
      --yeyo-btn-disabled-cursor: var(--yeyo-btn-disabled-cursor, not-allowed);
    }
    button {
      background: var(--yeyo-btn-bg);
      color: var(--yeyo-btn-color);
      border: var(--yeyo-btn-border);
      border-radius: var(--yeyo-btn-radius);
      padding: var(--yeyo-btn-padding);
      font-size: var(--yeyo-btn-font-size);
      font-weight: var(--yeyo-btn-font-weight);
      cursor: pointer;
      transition: var(--yeyo-btn-transition);
      outline: none;
      box-sizing: border-box;
      min-width: 2.5em;
      min-height: 2.5em;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.5em;
    }
    button:focus {
      box-shadow: var(--yeyo-btn-shadow-focus);
    }
    button:disabled {
      opacity: var(--yeyo-btn-disabled-opacity);
      cursor: var(--yeyo-btn-disabled-cursor);
    }
    .primary {
      --yeyo-btn-bg: #3b82f6;
      --yeyo-btn-bg-hover: #2563eb;
      --yeyo-btn-color: #fff;
      --yeyo-btn-border: none;
    }
    .primary:hover:not(:disabled) {
      --yeyo-btn-bg: var(--yeyo-btn-bg-hover);
    }
    .secondary {
      --yeyo-btn-bg: #f3f4f6;
      --yeyo-btn-bg-hover: #e5e7eb;
      --yeyo-btn-color: #374151;
      --yeyo-btn-border: 1px solid #d1d5db;
    }
    .secondary:hover:not(:disabled) {
      --yeyo-btn-bg: var(--yeyo-btn-bg-hover);
    }
    .danger {
      --yeyo-btn-bg: #ef4444;
      --yeyo-btn-bg-hover: #dc2626;
      --yeyo-btn-color: #fff;
      --yeyo-btn-border: none;
    }
    .danger:hover:not(:disabled) {
      --yeyo-btn-bg: var(--yeyo-btn-bg-hover);
    }
    /* Icon slot styling */
    ::slotted(svg),
    ::slotted(img) {
      width: 1em;
      height: 1em;
      display: inline-block;
    }
  `;

  @property({ type: String })
  label: string = 'Button';

  @property({ type: String })
  variant: 'primary' | 'secondary' | 'danger' = 'primary';

  @property({ type: Boolean, reflect: true })
  disabled: boolean = false;

  @property({ type: String })
  size: 'sm' | 'md' | 'lg' = 'md';

  @property({ type: String })
  shape: 'rounded' | 'square' | 'pill' = 'rounded';

  protected updated(changed: PropertyValues) {
    super.updated?.(changed);
    this._applySize();
    this._applyShape();
  }

  private _applySize() {
    let padding = '8px 16px', fontSize = '14px';
    if (this.size === 'sm') {
      padding = '4px 10px';
      fontSize = '12px';
    } else if (this.size === 'lg') {
      padding = '12px 24px';
      fontSize = '16px';
    }
    this.style.setProperty('--yeyo-btn-padding', padding);
    this.style.setProperty('--yeyo-btn-font-size', fontSize);
  }

  private _applyShape() {
    let radius = '6px';
    if (this.shape === 'square') {
      radius = '0px';
    } else if (this.shape === 'pill') {
      radius = '999px';
    }
    this.style.setProperty('--yeyo-btn-radius', radius);
  }

  protected render() {
    return html`
      <button
        class="${this.variant}"
        ?disabled="${this.disabled}"
        @click="${this.handleClick}"
      >
        <slot name="icon"></slot>
        ${this.label}
        <slot name="trailing"></slot>
      </button>
    `;
  }

  private handleClick(event: Event) {
    if (this.disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }
    this.dispatchEvent(new CustomEvent('yeyo-click', {
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