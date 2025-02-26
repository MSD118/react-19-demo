class TextInputComponent extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
      this.render();
    }
  
    static get observedAttributes() {
      return ["value"];
    }
  
    attributeChangedCallback(name, oldValue, newValue) {
      if (name === "value" && this.inputElement) {
        this.inputElement.value = newValue;
      }
    }
  
    connectedCallback() {
      this.inputElement = this.shadowRoot.querySelector("input");
      this.inputElement.addEventListener("input", this.handleInput.bind(this));
    }
  
    disconnectedCallback() {
      this.inputElement.removeEventListener("input", this.handleInput.bind(this));
    }
  
    handleInput(event) {
      this.dispatchEvent(new CustomEvent("oninputUpdate", {
        detail: { value: event.target.value },
        bubbles: true,
        composed: true,
      }));
    }
  
    render() {
      this.shadowRoot.innerHTML = `
        <style>
          input {
            padding: 8px;
            font-size: 16px;
            border: 1px solid #ccc;
            border-radius: 4px;
            width: 100%;
          }
        </style>
        <input type="text" value="${this.getAttribute("value") || ""}" />
      `;
    }
  }
  
  customElements.define("text-input", TextInputComponent);
  