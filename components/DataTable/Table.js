import { __rest } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { table } from 'grommet-exp-theme';

const Table = forwardRef((_a, ref) => {
    var rest = __rest(_a, []);
    return jsx("table", Object.assign({ className: table, ref: ref }, rest));
});
Table.displayName = "Anchor";

export { Table };
