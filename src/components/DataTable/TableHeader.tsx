import { forwardRef } from "react";
import { TableContext } from "./TableContext";

type TableHeader = {
  children?: React.ReactNode;
};

const TableHeader = forwardRef<HTMLTableElement, TableHeader>(
  ({ ...rest }: TableHeader, ref): JSX.Element => {
    return (
      <TableContext.Provider value="header">
        <thead {...rest} />
      </TableContext.Provider>
    );
  }
);

TableHeader.displayName = "TableHeader";

export { TableHeader };
