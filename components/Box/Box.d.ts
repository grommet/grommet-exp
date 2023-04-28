/// <reference types="react" />
import { ContentSizeType, SpacingSizeType, SpacingType } from "../types";
export type AlignType = "start" | "center" | "stretch" | "end";
export type JustifyType = "start" | "center" | "between" | "end";
type BoxProps = {
    align?: AlignType;
    as?: React.ElementType;
    background?: "default" | "back" | "front" | "contrast" | "active" | "selected";
    border?: boolean | "top" | "bottom" | "left" | "right";
    children?: React.ReactNode;
    className?: string;
    direction?: "row" | "column";
    elevation?: "small" | "medium" | "large";
    flex?: boolean | "grow" | "shrink";
    gap?: SpacingSizeType;
    height?: ContentSizeType;
    justify?: JustifyType;
    margin?: SpacingType;
    onClick?: (event: React.MouseEvent<HTMLDivElement>) => any;
    pad?: SpacingType;
    position?: "absolute" | "fixed" | "relative";
    round?: "xsmall" | "small" | "medium" | "large" | "xlarge" | "full";
    width?: ContentSizeType;
    wrap?: boolean;
};
declare const Box: import("react").ForwardRefExoticComponent<BoxProps & import("react").RefAttributes<HTMLDivElement>>;
export { Box, BoxProps };
