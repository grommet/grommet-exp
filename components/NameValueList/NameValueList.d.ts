/// <reference types="react" />
/// <reference types="react" />
import { GridProps } from "../Grid";
import { TextAlignType } from "../Text";
import { SpacingSizeType } from "../types";
type NameValueListProps = {
    align?: TextAlignType;
    children?: JSX.Element | JSX.Element[];
    gap?: SpacingSizeType;
    layout?: "column" | "grid";
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
declare const NameValueList: import("react").ForwardRefExoticComponent<NameValueListProps & GridProps & import("react").RefAttributes<HTMLDivElement>>;
export { NameValueList };
