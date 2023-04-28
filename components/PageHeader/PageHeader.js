import { __rest } from 'tslib';
import { jsx, jsxs } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import '../Header/index.js';
import '../Heading/index.js';
import '../Paragraph/index.js';
import '../Box/index.js';
import '../Container/index.js';
import { pageHeaderContainerStyle, pageHeader } from 'grommet-exp-theme';
import { Box } from '../Box/Box.js';
import { Header } from '../Header/Header.js';
import { Container } from '../Container/Container.js';
import { Heading } from '../Heading/Heading.js';
import { Paragraph } from '../Paragraph/Paragraph.js';

const PageHeader = forwardRef((_a, ref) => {
    var { actions, parent, subtitle, title } = _a, rest = __rest(_a, ["actions", "parent", "subtitle", "title"]);
    return (jsx(Box, Object.assign({ className: pageHeaderContainerStyle }, { children: jsxs(Header, Object.assign({ ref: ref, className: pageHeader, align: "start", gap: "none", pad: { top: "large", bottom: "medium" } }, rest, { children: [jsx(Container, Object.assign({ gridArea: "parent" }, { children: parent })), jsx(Container, Object.assign({ gridArea: "title" }, { children: jsx(Heading, Object.assign({ level: 1 }, { children: title })) })), jsx(Container, Object.assign({ gridArea: "actions" }, { children: actions })), subtitle && (jsx(Container, Object.assign({ gridArea: "subtitle" }, { children: jsx(Paragraph, Object.assign({ level: 1 }, { children: subtitle })) })))] })) })));
});
PageHeader.displayName = "PageHeader";

export { PageHeader };
