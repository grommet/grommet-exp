import { __rest } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import { page } from 'grommet-exp-theme';
import { PageContext } from './PageContext.js';

const Page = forwardRef((_a, ref) => {
    var { kind } = _a, rest = __rest(_a, ["kind"]);
    return (jsx(PageContext.Provider, Object.assign({ value: { kind } }, { children: jsx("div", Object.assign({ className: page, ref: ref }, rest)) })));
});
Page.displayName = "Page";

export { Page };
