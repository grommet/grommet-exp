import { createContext } from "react";

export interface PageContextType {
  kind?: "wide" | "narrow" | "full";
}

export const PageContext = createContext<PageContextType>({});
