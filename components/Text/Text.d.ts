/// <reference types="react" />
/// <reference types="react" />
import { SpacingType } from "../types";
export type TextAlignType = "start" | "center" | "end" | undefined;
type TextProps = {
    as?: React.ElementType;
    children?: React.ReactNode;
    color?: "strong" | "weak" | "xweak";
    margin?: SpacingType;
    size?: "xsmall" | "small" | "medium" | "large" | "xlarge";
    textAlign?: TextAlignType;
    weight?: "light" | "regular" | "medium" | "semibold" | "bold";
    level?: 1 | 2 | 3;
};
declare const Text: import("react").ForwardRefExoticComponent<TextProps & import("react").RefAttributes<HTMLSpanElement>>;
export { Text };
