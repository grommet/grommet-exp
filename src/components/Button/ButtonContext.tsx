import { createContext } from "react";

export type ButtonKindType =
  | undefined
  | "default"
  | "nav"
  | "secondary"
  | "primary"
  | "plain";

export interface ButtonContextType {
  kind: ButtonKindType;
}

export const ButtonContext = createContext<ButtonContextType>({
  kind: undefined,
});
