import { forwardRef } from "react";
import { table } from "console";
type TableProps = {
  children?: React.ReactNode;
};

const Table = forwardRef<HTMLTableElement, TableProps>(
  ({ ...rest }: TableProps, ref): JSX.Element => {
    return <table ref={ref} {...rest} />;
  }
);

Table.displayName = "Anchor";

export { Table };
