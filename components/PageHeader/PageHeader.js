import { __rest } from 'tslib';
import { jsx, jsxs } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import '../Header/index.js';
import '../Heading/index.js';
import '../Paragraph/index.js';
import '../Box/index.js';
import { pageHeaderContainerStyle, pageHeader } from 'grommet-exp-theme';
import { Box } from '../Box/Box.js';
import { Header } from '../Header/Header.js';
import { Heading } from '../Heading/Heading.js';
import { Paragraph } from '../Paragraph/Paragraph.js';

const PageHeader = forwardRef((_a, ref) => {
    var { actions, pad, parent, subtitle, title } = _a, rest = __rest(_a, ["actions", "pad", "parent", "subtitle", "title"]);
    return (jsx(Box, Object.assign({ className: pageHeaderContainerStyle }, { children: jsxs(Header, Object.assign({ ref: ref, className: pageHeader, align: "start", gap: "none", pad: pad || { top: "large", bottom: "medium" } }, rest, { children: [jsx(Box, Object.assign({ gridArea: "parent" }, { children: parent })), jsx(Box, Object.assign({ gridArea: "title" }, { children: jsx(Heading, Object.assign({ level: 1 }, { children: title })) })), jsx(Box, Object.assign({ gridArea: "actions" }, { children: actions })), subtitle && (jsx(Box, Object.assign({ gridArea: "subtitle" }, { children: jsx(Paragraph, Object.assign({ level: 1 }, { children: subtitle })) })))] })) })));
});
PageHeader.displayName = "PageHeader";

export { PageHeader };
