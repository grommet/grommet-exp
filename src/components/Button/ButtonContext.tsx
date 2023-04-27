import { createContext } from "react";

export type ButtonKindType = "default" | "nav" | "secondary" | "primary";

export interface ButtonContextType {
  kind: ButtonKindType;
}

export const ButtonContext = createContext<ButtonContextType>({ kind: "default" });
