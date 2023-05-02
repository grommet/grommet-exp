/// <reference types="react" />
import { KindType, ValuesType } from "../Meter";
type LegendProps = {
    id?: string;
    kind?: KindType;
    max?: number | [number, number];
    min?: number | [number, number];
    values: ValuesType;
};
declare const Legend: import("react").ForwardRefExoticComponent<LegendProps & import("react").RefAttributes<HTMLHeadingElement>>;
export { Legend };
