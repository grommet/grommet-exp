import { MarginStyleType, PadStyleType, SpacingType } from "./types";
export declare const responsiveContainerStyle: ({ small, medium, large, xlarge, }: {
    small?: object | undefined;
    medium?: object | undefined;
    large?: object | undefined;
    xlarge?: object | undefined;
}) => {
    "@container": {
        [x: string]: object;
    };
};
export declare const translatePad: (pad?: SpacingType) => PadStyleType;
export declare const translateMargin: (margin?: SpacingType) => MarginStyleType;
