interface TextInputElement extends HTMLElement {
    value?: string;
    oninputUpdate?: (event: CustomEvent<string>) => void;
}