import { forwardRef, useMemo } from "react";
import { Grid, GridColumnsType, GridProps } from "../Grid";
import { TextAlignType } from "../Text";
import { SpacingSizeType } from "../types";
import {
  NameValueListContext,
  NameValueListContextType,
} from "./NameValueListContext";

type NameValueListProps = {
  align?: TextAlignType;
  children?: JSX.Element | JSX.Element[];
  gap?: SpacingSizeType;
  layout?: "column" | "grid";
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

const NameValueList = forwardRef<HTMLDivElement, NameValueListProps & GridProps>(
  (
    {
      align,
      gap,
      layout = 'column',
      nameProps,
      pairProps = { direction: 'row' },
      valueProps,
      ...rest
    }: (NameValueListProps & GridProps),
    ref
  ): JSX.Element => {
    const contextValue: NameValueListContextType = useMemo(
      () => ({ nameProps, pairProps, valueProps }),
      [nameProps, pairProps, valueProps]
    );

    // If layout is grid, valueWidth sets the max width of the column.
    // Grid will 'fit' as many columns of valueWidth per row as container's
    // width allows.
    let columns: GridColumnsType;
    const nameWidth = nameProps?.width || "small";
    const valueWidth = valueProps?.width || "medium";
    if (layout === "grid") columns = valueWidth;
    else if (layout === "column" && pairProps?.direction === "row")
      columns = `${nameWidth}-${valueWidth}`;
    else columns = valueWidth;

    return (
      <NameValueListContext.Provider value={contextValue}>
        <Grid
          as="dl"
          ref={ref}
          columns={columns}
          gap={{
            column: "large",
            row: "small",
          }}
          margin="none" // override browser default margin for dl
          {...rest}
        />
      </NameValueListContext.Provider>
    );
  }
);

NameValueList.displayName = "NameValueList";

export { NameValueList };
