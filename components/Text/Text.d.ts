/// <reference types="react" />
type TextProps = {
    children?: React.ReactNode;
    color?: "strong" | "weak" | "xweak";
    size?: "xsmall" | "small" | "medium" | "large" | "xlarge";
    level?: 1 | 2 | 3;
};
declare const Text: import("react").ForwardRefExoticComponent<TextProps & import("react").RefAttributes<HTMLSpanElement>>;
export { Text };
