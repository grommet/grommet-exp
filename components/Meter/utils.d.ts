/// <reference types="react" />
import { BackgroundType } from "../Box";
export type PatternType = "dots" | "diagonals";
export type ValuesType = {
    highlight?: boolean;
    label?: string;
    onClick?: (event: React.MouseEvent) => void;
    onHover?: (over: boolean) => void;
    pattern?: PatternType;
    value: number | [number, number];
}[];
export type KindType = "qualitative" | "sequential" | "divergent" | "single";
export declare const useKind: (kind?: KindType, values?: ValuesType) => KindType;
export type BoundsType = {
    pathMax: number;
    pathMin: number;
    colorMax: number;
    colorMin: number;
};
export declare const useBounds: (kind: KindType, max?: number | [number, number], min?: number | [number, number], values?: ValuesType) => BoundsType;
export type GraphicProps = {
    background: BackgroundType;
    bounds: BoundsType;
    direction?: "horizontal" | "vertical";
    id?: string;
    kind: KindType;
    pattern?: "dots" | "diagonals";
    round?: boolean;
    size?: "small" | "medium" | "large" | "full";
    thickness?: "small" | "medium" | "large";
    type?: "bar" | "circle" | "pie" | "semicircle";
    values?: ValuesType;
};
type ValueColorArgs = {
    kind: KindType;
    bounds: BoundsType;
    value: number;
    index: number;
};
export declare const valueColor: ({ kind, bounds, value, index, }: ValueColorArgs) => string;
export declare const backgroundColor: (name: BackgroundType) => string;
export declare const baseUnit = 24;
export declare const polarToCartesian: (centerX: number, centerY: number, radius: number, angleInDegrees: number) => {
    x: number;
    y: number;
};
export declare const arcCommands: (centerX: number, centerY: number, radius: number, startAngle: number, endAngle: number) => string;
export declare const translateEndAngle: (startAngle: number, anglePer: number, value: number) => number;
export declare const valuePattern: (idArg: string, patternName: PatternType | undefined, stroke: string) => [string, JSX.Element];
export {};
