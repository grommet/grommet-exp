import { createContext } from "react";
import { TextAlignType } from "../Text";

export type NameValueListContextType = {
  nameProps?: {
    align?: TextAlignType;
    width?: "small" | "medium";
  };
  pairProps?: {
    direction?: "column" | "column-reverse" | "row";
  };
  valueProps?: {
    align?: TextAlignType;
    width?: "small" | "medium";
  };
};

export const NameValueListContext = createContext<NameValueListContextType>({});
