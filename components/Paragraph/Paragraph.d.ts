/// <reference types="react" />
type ParagraphProps = {
    children?: React.ReactNode;
    color?: "strong" | "weak";
    size?: "small" | "medium" | "large";
    level?: 1 | 2 | 3;
};
declare const Paragraph: import("react").ForwardRefExoticComponent<ParagraphProps & import("react").RefAttributes<HTMLParagraphElement>>;
export { Paragraph };
