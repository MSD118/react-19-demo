interface TextInputElement extends HTMLElement {
    value?: string;
}

declare global {
    namespace JSX {
        interface IntrinsicElements {
            'text-input': React.DetailedHTMLProps<
                React.HTMLAttributes<TextInputElement>,
                TextInputElement
            > & {
                value?: string;
                oninputUpdate?: (event: CustomEvent<{ value: string }>) => void;
            };
        }
    }
}
