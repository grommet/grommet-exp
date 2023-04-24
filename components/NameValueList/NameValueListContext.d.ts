/// <reference types="react" />
import { TextAlignType } from "../Text";
export type NameValueListContextType = {
    nameProps?: {
        align?: TextAlignType;
        width?: "small" | "medium";
    };
    pairProps?: {
        direction?: "column" | "column-reverse" | "row";
    };
    valueProps?: {
        align?: TextAlignType;
        width?: "small" | "medium";
    };
};
export declare const NameValueListContext: import("react").Context<NameValueListContextType>;
