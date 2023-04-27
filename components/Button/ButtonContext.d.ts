/// <reference types="react" />
export type ButtonKindType = "default" | "nav" | "secondary" | "primary";
export interface ButtonContextType {
    kind: ButtonKindType;
}
export declare const ButtonContext: import("react").Context<ButtonContextType>;
