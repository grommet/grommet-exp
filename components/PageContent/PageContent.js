import { __rest } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import { forwardRef, useContext } from 'react';
import { pageContent } from 'grommet-exp-theme';
import { PageContext } from '../Page/PageContext.js';

const PageContent = forwardRef((_a, ref) => {
    var { background, fill } = _a, rest = __rest(_a, ["background", "fill"]);
    const { kind } = useContext(PageContext);
    return (jsx("div", Object.assign({ className: pageContent({ background, kind }), ref: ref }, rest)));
});
PageContent.displayName = "PageContent";

export { PageContent };
