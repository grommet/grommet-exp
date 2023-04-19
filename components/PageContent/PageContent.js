import { __rest, __assign } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import { forwardRef, useContext } from 'react';
import { pageContent } from 'grommet-exp-theme';
import { PageContext } from '../Page/PageContext.js';

var PageContent = forwardRef(function (_a, ref) {
    var background = _a.background, fill = _a.fill, rest = __rest(_a, ["background", "fill"]);
    var kind = useContext(PageContext).kind;
    return (jsx(PageContext.Provider, __assign({ value: { kind: kind } }, { children: jsx("div", __assign({ className: pageContent({ background: background, kind: kind }), ref: ref }, rest)) })));
});
PageContent.displayName = "PageContent";

export { PageContent };
//# sourceMappingURL=PageContent.js.map
