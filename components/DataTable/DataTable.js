import { jsxs, jsx } from 'react/jsx-runtime';
import '../Table/index.js';
import '../TableBody/index.js';
import '../TableHeader/index.js';
import '../TableRow/index.js';
import '../TableCell/index.js';
import { Table } from '../Table/Table.js';
import { TableHeader } from '../TableHeader/TableHeader.js';
import { TableRow } from '../TableRow/TableRow.js';
import { TableCell } from '../TableCell/TableCell.js';
import { TableBody } from '../TableBody/TableBody.js';

const DataTable = ({ columns, data, }) => {
    return (jsxs(Table, { children: [jsx(TableHeader, { children: jsx(TableRow, { children: columns === null || columns === void 0 ? void 0 : columns.map((column, j) => (jsx(TableCell, { children: column.header }, column.property || j))) }) }), jsx(TableBody, { children: data === null || data === void 0 ? void 0 : data.map((datum, i) => (jsx(TableRow, { children: columns === null || columns === void 0 ? void 0 : columns.map((column, j) => (jsx(TableCell, { children: (column.render && column.render(datum)) ||
                            (column.property ? datum[column.property] : "--") }, column.property || j))) }, i))) })] }));
};

export { DataTable };
