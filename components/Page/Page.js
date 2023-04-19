import { __rest, __assign } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { page } from 'grommet-exp-theme';
import { PageContext } from './PageContext.js';

var Page = forwardRef(function (_a, ref) {
    var kind = _a.kind, rest = __rest(_a, ["kind"]);
    return (jsx(PageContext.Provider, __assign({ value: { kind: kind } }, { children: jsx("div", __assign({ className: page, ref: ref }, rest)) })));
});
Page.displayName = "Page";

export { Page };
//# sourceMappingURL=Page.js.map
