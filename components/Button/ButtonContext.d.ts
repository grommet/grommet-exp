/// <reference types="react" />
export type ButtonKindType = undefined | "default" | "nav" | "secondary" | "primary" | "plain";
export interface ButtonContextType {
    kind: ButtonKindType;
}
export declare const ButtonContext: import("react").Context<ButtonContextType>;
