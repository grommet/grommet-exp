import { __rest } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import { forwardRef, useContext } from 'react';
import { TableContext } from '../Table/TableContext.js';
import { th, td } from 'grommet-exp-theme';

const TableCell = forwardRef((_a, ref) => {
    var rest = __rest(_a, []);
    const tableContext = useContext(TableContext);
    if (tableContext === "header")
        return jsx("th", Object.assign({ ref: ref, className: th }, rest));
    return jsx("td", Object.assign({ ref: ref, className: td }, rest));
});
TableCell.displayName = "TableCell";

export { TableCell };
