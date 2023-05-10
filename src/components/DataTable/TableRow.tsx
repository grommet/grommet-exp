import { forwardRef } from "react";

type TableRow = {
  children?: React.ReactNode;
};

const TableRow = forwardRef<HTMLTableRowElement, TableRow>(
  ({ ...rest }: TableRow, ref): JSX.Element => {
    return <tr ref={ref} {...rest} />;
  }
);

TableRow.displayName = "TableRow";

export { TableRow };
