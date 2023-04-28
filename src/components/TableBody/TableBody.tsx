import { forwardRef } from "react";

type TableBody = {
  children?: React.ReactNode;
};

const TableBody = forwardRef<HTMLTableElement, TableBody>(
  ({ ...rest }: TableBody, ref): JSX.Element => {
    return <tbody {...rest} />;
  }
);

TableBody.displayName = "TableBody";

export { TableBody };
