import { __rest } from 'tslib';
import { jsx, jsxs } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import '../Header/index.js';
import '../Heading/index.js';
import '../Paragraph/index.js';
import '../Box/index.js';
import { pageHeaderContainerStyle, pageHeader, actions } from 'grommet-exp-theme';
import { Box } from '../Box/Box.js';
import { Header } from '../Header/Header.js';
import { Heading } from '../Heading/Heading.js';
import { Paragraph } from '../Paragraph/Paragraph.js';

const PageHeader = forwardRef((_a, ref) => {
    var { actions: actions$1, icon, parent, subtitle, title } = _a, rest = __rest(_a, ["actions", "icon", "parent", "subtitle", "title"]);
    return (jsx(Box, Object.assign({ className: pageHeaderContainerStyle, gridArea: "pageHeader" }, { children: jsxs(Header, Object.assign({ ref: ref, className: pageHeader({ icon: icon ? true : false }), align: "start", gap: "none" }, rest, { children: [icon && (jsx(Box, Object.assign({ gridArea: "icon", pad: parent ? { vertical: "medium" } : { bottom: "medium" } }, { children: icon }))), jsx(Box, Object.assign({ gridArea: "parent" }, { children: parent })), jsx(Box, Object.assign({ gridArea: "title" }, { children: jsx(Heading, Object.assign({ level: 1 }, { children: title })) })), subtitle && (jsx(Box, Object.assign({ gridArea: "subtitle" }, { children: jsx(Paragraph, Object.assign({ level: 1 }, { children: subtitle })) }))), jsx(Box, Object.assign({ gridArea: "actions", className: actions }, { children: actions$1 }))] })) })));
});
PageHeader.displayName = "PageHeader";

export { PageHeader };
