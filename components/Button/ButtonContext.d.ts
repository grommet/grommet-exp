/// <reference types="react" />
export type ButtonKindType = "default" | "nav" | "secondary" | "primary" | "plain";
export interface ButtonContextType {
    kind: ButtonKindType;
}
export declare const ButtonContext: import("react").Context<ButtonContextType>;
