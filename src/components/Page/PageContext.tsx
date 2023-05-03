import { createContext } from "react";

export interface PageContextType {
  kind?: "wide" | "narrow" | "full";
  layout?: "header-main-aside" | "header-main";
}

export const PageContext = createContext<PageContextType>({});
