/// <reference types="react" />
export interface PageContextType {
    kind?: "wide" | "narrow" | "full";
    layout?: "header-main-aside" | "header-main";
}
export declare const PageContext: import("react").Context<PageContextType>;
