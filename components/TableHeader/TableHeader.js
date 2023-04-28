import { __rest } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import '../Table/index.js';
import { TableContext } from '../Table/TableContext.js';

const TableHeader = forwardRef((_a, ref) => {
    var rest = __rest(_a, []);
    return (jsx(TableContext.Provider, Object.assign({ value: "header" }, { children: jsx("thead", Object.assign({}, rest)) })));
});
TableHeader.displayName = "TableHeader";

export { TableHeader };
