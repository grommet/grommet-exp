import { createContext } from "react";

export interface TabsContextType {
  active: string;
  addLabel: (label: string) => void;
  removeLabel: (label: string) => void;
}

export const TabsContext = createContext<TabsContextType>({
  active: "",
  addLabel: (s) => {},
  removeLabel: (s) => {},
});
