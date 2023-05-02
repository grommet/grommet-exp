/// <reference types="react" />
import { BackgroundType } from "../Box";
import { KindType, ValuesType } from "./utils";
export type MeterProps = {
    background?: BackgroundType;
    direction?: "horizontal" | "vertical";
    kind?: KindType;
    max?: number | [number, number];
    min?: number | [number, number];
    round?: boolean;
    size?: "small" | "medium" | "large" | "full";
    thickness?: "small" | "medium" | "large";
    type?: "bar" | "circle" | "pie" | "semicircle";
    value?: number;
    values?: ValuesType;
};
declare const Meter: import("react").ForwardRefExoticComponent<MeterProps & import("react").RefAttributes<SVGElement>>;
export { Meter };
