import { forwardRef, useContext } from "react";
import { TableContext } from "./TableContext";
import { td, th } from "grommet-exp-theme";

type TableCell = {
  children?: React.ReactNode;
};

const TableCell = forwardRef<HTMLTableCellElement, TableCell>(
  ({ ...rest }: TableCell, ref): JSX.Element => {
    const tableContext = useContext(TableContext);

    if (tableContext === "header")
      return <th ref={ref} className={th} {...rest} />;
    return <td ref={ref} className={td} {...rest} />;
  }
);

TableCell.displayName = "TableCell";

export { TableCell };
