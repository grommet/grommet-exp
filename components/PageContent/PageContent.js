import { __rest } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import { forwardRef, useContext } from 'react';
import { pageContent, box } from 'grommet-exp-theme';
import { PageContext } from '../Page/PageContext.js';

const PageContent = forwardRef((_a, ref) => {
    var { background, className, fill, gap } = _a, rest = __rest(_a, ["background", "className", "fill", "gap"]);
    const { kind } = useContext(PageContext);
    return (jsx("div", Object.assign({ className: `${pageContent({ background, kind })} ${box({
            gap,
        })} ${className}`, ref: ref }, rest)));
});
PageContent.displayName = "PageContent";

export { PageContent };
