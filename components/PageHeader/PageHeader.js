import { __rest } from 'tslib';
import { jsxs, jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import '../Header/index.js';
import '../Heading/index.js';
import '../Paragraph/index.js';
import { Header } from '../Header/Header.js';
import { Heading } from '../Heading/Heading.js';
import { Paragraph } from '../Paragraph/Paragraph.js';

const PageHeader = forwardRef((_a, ref) => {
    var { parent, subtitle, title } = _a, rest = __rest(_a, ["parent", "subtitle", "title"]);
    return (jsxs(Header, Object.assign({ ref: ref, align: "stretch", direction: "column", gap: "none", pad: { vertical: "medium" } }, rest, { children: [parent, jsx(Heading, Object.assign({ level: 1 }, { children: title })), subtitle && jsx(Paragraph, Object.assign({ level: 1 }, { children: subtitle }))] })));
});
PageHeader.displayName = "PageHeader";

export { PageHeader };
