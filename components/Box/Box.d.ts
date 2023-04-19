/// <reference types="react" />
import { SizeType, SpacingSizeType, SpacingType } from "../types";
type AlignType = "start" | "center" | "stretch" | "end";
type JustifyType = "start" | "center" | "between" | "end";
type BoxProps = {
    align?: AlignType;
    as?: React.ElementType;
    background?: "default" | "back" | "front" | "contrast";
    border?: boolean | "top" | "bottom";
    children?: React.ReactNode | React.ReactNode[];
    direction?: "row" | "column";
    elevation?: SizeType;
    flex?: boolean | "grow" | "shrink";
    gap?: SpacingSizeType;
    height?: SizeType | "xsmall";
    justify?: JustifyType;
    margin?: SpacingType;
    pad?: SpacingType;
    round?: SpacingSizeType;
    width?: SizeType | "xsmall";
    wrap?: boolean;
};
declare const Box: import("react").ForwardRefExoticComponent<BoxProps & import("react").RefAttributes<HTMLDivElement>>;
export { Box, BoxProps };
