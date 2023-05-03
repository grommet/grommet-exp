import { __rest } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import { forwardRef, useContext } from 'react';
import { pageContent } from 'grommet-exp-theme';
import { PageContext } from '../Page/PageContext.js';

const PageContent = forwardRef((_a, ref) => {
    var { background, className, fill } = _a, rest = __rest(_a, ["background", "className", "fill"]);
    const { kind } = useContext(PageContext);
    return (jsx("div", Object.assign({ className: `${pageContent({ background, kind })} ${className}`, ref: ref }, rest)));
});
PageContent.displayName = "PageContent";

export { PageContent };
