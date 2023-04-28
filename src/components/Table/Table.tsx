import { forwardRef } from "react";
import { table } from "grommet-exp-theme";

type TableProps = {
  children?: React.ReactNode;
};

const Table = forwardRef<HTMLTableElement, TableProps>(
  ({ ...rest }: TableProps, ref): JSX.Element => {
    return <table className={table} ref={ref} {...rest} />;
  }
);

Table.displayName = "Anchor";

export { Table };
