import { __rest } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { grommet } from 'grommet-exp-theme';

const Grommet = forwardRef((_a, ref) => {
    var { children } = _a, rest = __rest(_a, ["children"]);
    return (jsx("div", Object.assign({ className: grommet, ref: ref }, rest, { children: children })));
});
Grommet.displayName = "Grommet";

export { Grommet };
