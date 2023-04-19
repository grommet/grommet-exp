/// <reference types="react" />
export interface PageContextType {
    kind?: "wide" | "narrow" | "full";
}
export declare const PageContext: import("react").Context<PageContextType>;
