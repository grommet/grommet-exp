import { __rest, __assign } from 'tslib';
import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import '../Header/index.js';
import '../Heading/index.js';
import '../Paragraph/index.js';
import { Header } from '../Header/Header.js';
import { Heading } from '../Heading/Heading.js';
import { Paragraph } from '../Paragraph/Paragraph.js';

var PageHeader = forwardRef(function (_a, ref) {
    var parent = _a.parent, subtitle = _a.subtitle, title = _a.title, rest = __rest(_a, ["parent", "subtitle", "title"]);
    return (jsxs(Header, __assign({ ref: ref, align: "stretch", direction: "column", gap: "none", pad: { vertical: "medium" } }, rest, { children: [parent, jsx(Heading, __assign({ level: 1 }, { children: title })), subtitle && jsx(Paragraph, __assign({ level: 1 }, { children: subtitle }))] })));
});
PageHeader.displayName = "PageHeader";

export { PageHeader };
//# sourceMappingURL=PageHeader.js.map
