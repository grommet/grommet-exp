/// <reference types="react" />
/// <reference types="react" />
import { ContentSizeType, SpacingSizeType, SpacingType } from "../types";
export type AlignType = "start" | "center" | "stretch" | "end";
export type JustifyType = "start" | "center" | "between" | "end";
type BoxProps = {
    align?: AlignType;
    as?: React.ElementType;
    background?: "default" | "back" | "front" | "contrast";
    border?: boolean | "top" | "bottom";
    children?: React.ReactNode | React.ReactNode[];
    direction?: "row" | "column";
    elevation?: "small" | "medium" | "large";
    flex?: boolean | "grow" | "shrink";
    gap?: SpacingSizeType;
    height?: ContentSizeType;
    justify?: JustifyType;
    margin?: SpacingType;
    pad?: SpacingType;
    round?: "xsmall" | "small" | "medium" | "large" | "xlarge" | "full";
    width?: ContentSizeType;
    wrap?: boolean;
};
declare const Box: import("react").ForwardRefExoticComponent<BoxProps & import("react").RefAttributes<HTMLDivElement>>;
export { Box, BoxProps };
