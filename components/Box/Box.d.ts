/// <reference types="react" />
import { ContentSizeType, SpacingSizeType, SpacingType } from "../types";
export type BackgroundType = "default" | "back" | "front" | "contrast" | "active" | "selected";
export type AlignType = "start" | "center" | "stretch" | "end";
export type JustifyType = "start" | "center" | "between" | "end";
type BoxProps = {
    align?: AlignType;
    as?: React.ElementType;
    background?: BackgroundType;
    border?: boolean | "top" | "bottom" | "left" | "right";
    children?: React.ReactNode;
    className?: string;
    direction?: "row" | "column" | "row-responsive";
    elevation?: "small" | "medium" | "large";
    flex?: boolean | "grow" | "shrink";
    gap?: SpacingSizeType;
    gridArea?: string;
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
