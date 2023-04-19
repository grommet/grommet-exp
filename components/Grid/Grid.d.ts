/// <reference types="react" />
import { SizeType, SpacingSizeType } from "../types";
type GridProps = {
    as?: React.ElementType;
    children?: React.ReactNode | React.ReactNode[];
    columns?: SizeType;
    gap?: SpacingSizeType;
    margin?: SpacingSizeType;
    pad?: SpacingSizeType;
};
declare const Grid: import("react").ForwardRefExoticComponent<GridProps & import("react").RefAttributes<HTMLDivElement>>;
export { Grid, GridProps };
