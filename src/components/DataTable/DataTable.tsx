/* eslint-disable @typescript-eslint/no-explicit-any */
import { Table } from "../Table";
import { TableBody } from "../TableBody";
import { TableHeader } from "../TableHeader";
import { TableRow } from "../TableRow";
import { TableCell } from "../TableCell";

interface Column {
  property?: string;
  header?: string;
  render?: (datum: Datum) => any;
}

interface Datum {
  [key: string]: any;
}

export const DataTable = ({
  columns,
  data,
}: {
  columns?: Column[];
  data?: Datum[];
}) => {
  return (
    <Table>
      <TableHeader>
        {columns?.map((column) => (
          <TableCell>{column.header}</TableCell>
        ))}
      </TableHeader>
      <TableBody>
        {data?.map((datum) => (
          <TableRow>
            {columns?.map((column) => (
              <TableCell>
                {(column.render && column.render(datum)) ||
                  (column.property ? datum[column.property] : "--")}
              </TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
