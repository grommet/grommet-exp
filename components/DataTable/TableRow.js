import { __rest } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';

const TableRow = forwardRef((_a, ref) => {
    var rest = __rest(_a, []);
    return jsx("tr", Object.assign({ ref: ref }, rest));
});
TableRow.displayName = "TableRow";

export { TableRow };
