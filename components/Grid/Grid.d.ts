/// <reference types="react" />
import { ContentSizeType, SpacingSizeType } from "../types";
export type GridColumnsType = ContentSizeType | "small-small" | "small-flex" | "flex-small" | "small-flex-small" | "small-medium" | "medium-small" | "medium-flex" | "flex-medium" | "medium-medium";
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
    pad?: SpacingSizeType;
    width?: ContentSizeType;
};
declare const Grid: import("react").ForwardRefExoticComponent<GridProps & import("react").RefAttributes<HTMLDivElement>>;
export { Grid, GridProps };
