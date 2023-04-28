/// <reference types="react" />
import { ContentSizeType, SpacingSizeType, SpacingType } from "../types";
export type GridColumnsType = ContentSizeType | "small-small" | "small-flex" | "flex-small" | "small-flex-small" | "small-medium" | "medium-small" | "medium-flex" | "flex-medium" | "medium-medium" | 2;
type GapType = SpacingSizeType | {
    column: SpacingSizeType;
    row: SpacingSizeType;
};
type GridProps = {
    as?: React.ElementType;
    align?: "start" | "center" | "stretch" | "end";
    children?: React.ReactNode | React.ReactNode[];
    columns?: GridColumnsType;
    gap?: GapType;
    height?: ContentSizeType;
    margin?: SpacingSizeType;
    pad?: SpacingType;
    width?: ContentSizeType;
};
declare const Grid: import("react").ForwardRefExoticComponent<GridProps & import("react").RefAttributes<HTMLDivElement>>;
export { Grid, GridProps };
