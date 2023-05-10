import { jsxs, jsx } from 'react/jsx-runtime';
import { Table } from './Table.js';
import { TableBody } from './TableBody.js';
import { TableHeader } from './TableHeader.js';
import { TableRow } from './TableRow.js';
import { TableCell } from './TableCell.js';

const DataTable = ({ columns, data, }) => {
    return (jsxs(Table, { children: [jsx(TableHeader, { children: jsx(TableRow, { children: columns === null || columns === void 0 ? void 0 : columns.map((column, j) => (jsx(TableCell, { children: column.header }, column.property || j))) }) }), jsx(TableBody, { children: data === null || data === void 0 ? void 0 : data.map((datum, i) => (jsx(TableRow, { children: columns === null || columns === void 0 ? void 0 : columns.map((column, j) => (jsx(TableCell, { children: (column.render && column.render(datum)) ||
                            (column.property ? datum[column.property] : "--") }, column.property || j))) }, i))) })] }));
};

export { DataTable };
