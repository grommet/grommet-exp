import { createContext } from "react";

export type TableContextType = "body" | "header" | "footer";

export const TableContext = createContext<TableContextType>("body");
