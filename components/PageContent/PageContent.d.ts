/// <reference types="react" />
import { SpacingSizeType } from "../types";
type PageContentProps = {
    align?: "start" | "center" | "stretch" | "end";
    background?: "default" | "back" | "front" | "contrast";
    children?: React.ReactNode;
    className?: string;
    fill?: boolean;
    gap?: SpacingSizeType;
};
declare const PageContent: import("react").ForwardRefExoticComponent<PageContentProps & import("react").RefAttributes<HTMLDivElement>>;
export { PageContent };
