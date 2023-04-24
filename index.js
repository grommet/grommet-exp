'use strict';

var tslib = require('tslib');
var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var grommetExpTheme = require('grommet-exp-theme');

var Anchor = react.forwardRef(function (_a, ref) {
    var disabled = _a.disabled, href = _a.href, rest = tslib.__rest(_a, ["disabled", "href"]);
    return (jsxRuntime.jsx("a", tslib.__assign({ className: grommetExpTheme.anchor, ref: ref }, rest, { href: !disabled ? href : undefined })));
});
Anchor.displayName = 'Anchor';

var translatePad = function (pad) {
    var result = {};
    if (!pad)
        return result;
    if (typeof pad === 'string')
        result.pad = pad;
    if (typeof pad === 'object') {
        if (pad.horizontal)
            result.padHorizontal = pad.horizontal;
        if (pad.vertical)
            result.padVertical = pad.vertical;
        if (pad.top)
            result.padTop = pad.top;
        if (pad.bottom)
            result.padBottom = pad.bottom;
        if (pad.start)
            result.padStart = pad.start;
        if (pad.end)
            result.padEnd = pad.end;
    }
    return result;
};
var translateMargin = function (margin) {
    var result = {};
    if (!margin)
        return result;
    if (typeof margin === 'string')
        result.margin = margin;
    if (typeof margin === 'object') {
        if (margin.horizontal)
            result.marginHorizontal = margin.horizontal;
        if (margin.vertical)
            result.marginVertical = margin.vertical;
        if (margin.top)
            result.marginTop = margin.top;
        if (margin.bottom)
            result.marginBottom = margin.bottom;
        if (margin.start)
            result.marginStart = margin.start;
        if (margin.end)
            result.marginEnd = margin.end;
    }
    return result;
};

var Box = react.forwardRef(function (_a, ref) {
    var align = _a.align, as = _a.as, background = _a.background, border = _a.border, _b = _a.direction, direction = _b === void 0 ? "column" : _b, elevation = _a.elevation, flex = _a.flex, gap = _a.gap, height = _a.height, justify = _a.justify, margin = _a.margin, pad = _a.pad, round = _a.round, width = _a.width, wrap = _a.wrap, rest = tslib.__rest(_a, ["align", "as", "background", "border", "direction", "elevation", "flex", "gap", "height", "justify", "margin", "pad", "round", "width", "wrap"]);
    var Element = as || 'div';
    return (jsxRuntime.jsx(Element, tslib.__assign({ className: grommetExpTheme.box(tslib.__assign(tslib.__assign(tslib.__assign({ align: align, background: background, border: border, direction: direction, elevation: elevation, flex: flex, gap: gap, height: height, justify: justify }, translateMargin(margin)), translatePad(pad)), { round: round, width: width, wrap: wrap })), ref: ref }, rest)));
});
Box.displayName = "Box";

var Button = react.forwardRef(function (_a, ref) {
    var active = _a.active, iconProp = _a.icon, _b = _a.kind, kind = _b === void 0 ? "default" : _b, label = _a.label, reverse = _a.reverse, size = _a.size, _c = _a.type, type = _c === void 0 ? "button" : _c, rest = tslib.__rest(_a, ["active", "icon", "kind", "label", "reverse", "size", "type"]);
    var icon = iconProp && !iconProp.props.size
        ? react.cloneElement(iconProp, { size: size })
        : iconProp;
    var iconOnly = (icon && !label) || undefined;
    var content;
    if (icon && label) {
        content = (jsxRuntime.jsx(Box, tslib.__assign({ direction: "row", gap: "small", align: "center" }, { children: reverse ? label + icon : icon + label })));
    }
    else
        content = icon || label;
    return (jsxRuntime.jsx("button", tslib.__assign({ ref: ref, className: grommetExpTheme.button({ active: active, iconOnly: iconOnly, kind: kind, size: size }), type: type }, rest, { children: content })));
});
Button.displayName = "Button";

var Card = react.forwardRef(function (_a, ref) {
    var _b = _a.elevation, elevation = _b === void 0 ? "medium" : _b, _c = _a.flex, flex = _c === void 0 ? false : _c, _d = _a.gap, gap = _d === void 0 ? "small" : _d, _e = _a.pad, pad = _e === void 0 ? "medium" : _e, _f = _a.round, round = _f === void 0 ? "large" : _f, rest = tslib.__rest(_a, ["elevation", "flex", "gap", "pad", "round"]);
    return (jsxRuntime.jsx(Box, tslib.__assign({ ref: ref, elevation: elevation, flex: flex, gap: gap, pad: pad, round: round }, rest)));
});
Card.displayName = "Card";

var Footer = react.forwardRef(function (_a, ref) {
    var _b = _a.align, align = _b === void 0 ? "center" : _b, _c = _a.direction, direction = _c === void 0 ? "row" : _c, _d = _a.flex, flex = _d === void 0 ? false : _d, _e = _a.justify, justify = _e === void 0 ? "between" : _e, _f = _a.gap, gap = _f === void 0 ? "medium" : _f, rest = tslib.__rest(_a, ["align", "direction", "flex", "justify", "gap"]);
    return (jsxRuntime.jsx(Box, tslib.__assign({ as: "footer", ref: ref, align: align, direction: direction, flex: flex, gap: gap, justify: justify }, rest)));
});
Footer.displayName = "Footer";

var Form = react.forwardRef(function (_a, ref) {
    var children = _a.children, rest = tslib.__rest(_a, ["children"]);
    return (jsxRuntime.jsx(Box, tslib.__assign({ ref: ref, as: "form", gap: "small" }, rest, { children: children })));
});
Form.displayName = "Form";

var Text = react.forwardRef(function (_a, ref) {
    var as = _a.as, color = _a.color, levelProp = _a.level, size = _a.size, textAlign = _a.textAlign, weight = _a.weight, rest = tslib.__rest(_a, ["as", "color", "level", "size", "textAlign", "weight"]);
    var Element = as || "span";
    var level = !size ? levelProp : undefined;
    return (jsxRuntime.jsx(Element, tslib.__assign({ className: grommetExpTheme.text({ color: color, level: level, size: size, textAlign: textAlign, weight: weight }), ref: ref }, rest)));
});
Text.displayName = "Text";

var FormField = react.forwardRef(function (_a, ref) {
    var children = _a.children, error = _a.error, help = _a.help, htmlFor = _a.htmlFor, info = _a.info, label = _a.label, name = _a.name, // ignored for now
    required = _a.required, rest = tslib.__rest(_a, ["children", "error", "help", "htmlFor", "info", "label", "name", "required"]);
    return (jsxRuntime.jsxs(Box, tslib.__assign({}, rest, { children: [label && (jsxRuntime.jsx("label", tslib.__assign({ className: grommetExpTheme.text({ size: "xsmall", weight: "medium" }), htmlFor: htmlFor }, { children: label }))), help && jsxRuntime.jsx(Text, tslib.__assign({ size: "xsmall" }, { children: help })), children, help && jsxRuntime.jsx(Text, tslib.__assign({ size: "xsmall" }, { children: help })), error && jsxRuntime.jsx(Text, tslib.__assign({ size: "xsmall" }, { children: error }))] })));
});
FormField.displayName = "FormField";

var translateGap = function (gap) {
    var result = {};
    if (!gap)
        return result;
    if (typeof gap === "string")
        result.gap = gap;
    if (typeof gap === "object") {
        if (gap.column)
            result.gapColumn = gap.column;
        if (gap.row)
            result.gapRow = gap.row;
    }
    return result;
};
var Grid = react.forwardRef(function (_a, ref) {
    var as = _a.as, columns = _a.columns, gap = _a.gap, height = _a.height, _b = _a.margin, margin = _b === void 0 ? "none" : _b, _c = _a.pad, pad = _c === void 0 ? "none" : _c, width = _a.width, rest = tslib.__rest(_a, ["as", "columns", "gap", "height", "margin", "pad", "width"]);
    var Element = as || "div";
    return (jsxRuntime.jsx(Element, tslib.__assign({ className: grommetExpTheme.grid(tslib.__assign(tslib.__assign(tslib.__assign(tslib.__assign(tslib.__assign({ columns: columns }, translateGap(gap)), { height: height }), translateMargin(margin)), translatePad(pad)), { width: width })), ref: ref }, rest)));
});
Grid.displayName = "Grid";

var Grommet = react.forwardRef(function (_a, ref) {
    var children = _a.children, rest = tslib.__rest(_a, ["children"]);
    return (jsxRuntime.jsx("div", tslib.__assign({ className: grommetExpTheme.grommet, ref: ref }, rest, { children: children })));
});
Grommet.displayName = "Grommet";

var Header = react.forwardRef(function (_a, ref) {
    var _b = _a.align, align = _b === void 0 ? "center" : _b, _c = _a.direction, direction = _c === void 0 ? "row" : _c, _d = _a.flex, flex = _d === void 0 ? false : _d, _e = _a.justify, justify = _e === void 0 ? "between" : _e, _f = _a.gap, gap = _f === void 0 ? "medium" : _f, rest = tslib.__rest(_a, ["align", "direction", "flex", "justify", "gap"]);
    return (jsxRuntime.jsx(Box, tslib.__assign({ as: "header", ref: ref, align: align, direction: direction, flex: flex, gap: gap, justify: justify }, rest)));
});
Header.displayName = "Header";

var Heading = react.forwardRef(function (_a, ref) {
    var children = _a.children, level = _a.level, rest = tslib.__rest(_a, ["children", "level"]);
    var Heading = function (_a) {
        var props = tslib.__rest(_a, []);
        return react.createElement("h".concat(level), tslib.__assign(tslib.__assign({}, props), { ref: ref }), children);
    };
    return jsxRuntime.jsx(Heading, tslib.__assign({ className: grommetExpTheme.heading({ level: level }) }, rest));
});
Heading.displayName = "Heading";

var Icon = react.forwardRef(function (_a, ref) {
    var height = _a.height, size = _a.size, rest = tslib.__rest(_a, ["height", "size"]);
    return (jsxRuntime.jsx("img", tslib.__assign({ className: grommetExpTheme.icon({ height: height, size: size }), ref: ref }, rest)));
});
Icon.displayName = "Icon";

var NameValueListContext = react.createContext({});

var NameValueList = react.forwardRef(function (_a, ref) {
    var align = _a.align, gap = _a.gap, _b = _a.layout, layout = _b === void 0 ? 'column' : _b, nameProps = _a.nameProps, _c = _a.pairProps, pairProps = _c === void 0 ? { direction: 'row' } : _c, valueProps = _a.valueProps, rest = tslib.__rest(_a, ["align", "gap", "layout", "nameProps", "pairProps", "valueProps"]);
    var contextValue = react.useMemo(function () { return ({ nameProps: nameProps, pairProps: pairProps, valueProps: valueProps }); }, [nameProps, pairProps, valueProps]);
    // If layout is grid, valueWidth sets the max width of the column.
    // Grid will 'fit' as many columns of valueWidth per row as container's
    // width allows.
    var columns;
    var nameWidth = (nameProps === null || nameProps === void 0 ? void 0 : nameProps.width) || "small";
    var valueWidth = (valueProps === null || valueProps === void 0 ? void 0 : valueProps.width) || "medium";
    if (layout === "grid")
        columns = valueWidth;
    else if (layout === "column" && (pairProps === null || pairProps === void 0 ? void 0 : pairProps.direction) === "row")
        columns = "".concat(nameWidth, "-").concat(valueWidth);
    else
        columns = valueWidth;
    return (jsxRuntime.jsx(NameValueListContext.Provider, tslib.__assign({ value: contextValue }, { children: jsxRuntime.jsx(Grid, tslib.__assign({ as: "dl", ref: ref, columns: columns, gap: {
                column: "large",
                row: "small",
            }, margin: "none" // override browser default margin for dl
         }, rest)) })));
});
NameValueList.displayName = "NameValueList";

var NameValuePair = react.forwardRef(function (_a, ref) {
    var children = _a.children, nameProp = _a.name, rest = tslib.__rest(_a, ["children", "name"]);
    var _b = react.useContext(NameValueListContext), nameProps = _b.nameProps, pairProps = _b.pairProps, valueProps = _b.valueProps;
    var direction = pairProps === null || pairProps === void 0 ? void 0 : pairProps.direction;
    var column = direction === "column" || direction === "column-reverse";
    var Container = column ? Box : react.Fragment;
    var nameAlign = nameProps === null || nameProps === void 0 ? void 0 : nameProps.align;
    var valueAlign = valueProps === null || valueProps === void 0 ? void 0 : valueProps.align;
    // using margin to act as gap
    // <dl> elements must only directly contain
    // properly-ordered <dt> and <dd> groups
    var valueGap = column ? { bottom: "xxsmall" } : undefined;
    var name;
    if (typeof nameProp === "string" || typeof nameProp === "number") {
        name = (jsxRuntime.jsx(Text, tslib.__assign({ as: "dt", margin: valueGap, textAlign: nameAlign, color: "strong", weight: "medium" }, { children: nameProp })));
    }
    else
        name = (jsxRuntime.jsx(Box, tslib.__assign({ as: "dt", align: nameAlign }, { children: nameProp })));
    var value;
    if (typeof children === "string" || typeof children === "number")
        value = (
        // override browser default margin for dd
        jsxRuntime.jsx(Text, tslib.__assign({ as: "dd", margin: "none", textAlign: valueAlign }, { children: children })));
    else
        value = (
        // override browser default margin for dd
        jsxRuntime.jsx(Box, tslib.__assign({ margin: "none", as: "dd", align: valueAlign }, { children: children })));
    var first = direction !== "column-reverse" ? name : value;
    var second = direction !== "column-reverse" ? value : name;
    return (jsxRuntime.jsxs(Container, { children: [first, second] }));
});
NameValuePair.displayName = "NameValuePair";

var Nav = react.forwardRef(function (_a, ref) {
    var _b = _a.flex, flex = _b === void 0 ? false : _b, _c = _a.gap, gap = _c === void 0 ? "medium" : _c, rest = tslib.__rest(_a, ["flex", "gap"]);
    return jsxRuntime.jsx(Box, tslib.__assign({ as: "nav", ref: ref, flex: flex, gap: gap }, rest));
});
Nav.displayName = "Nav";

var PageContext = react.createContext({});

var Page = react.forwardRef(function (_a, ref) {
    var kind = _a.kind, rest = tslib.__rest(_a, ["kind"]);
    return (jsxRuntime.jsx(PageContext.Provider, tslib.__assign({ value: { kind: kind } }, { children: jsxRuntime.jsx("div", tslib.__assign({ className: grommetExpTheme.page, ref: ref }, rest)) })));
});
Page.displayName = "Page";

var PageContent = react.forwardRef(function (_a, ref) {
    var background = _a.background, fill = _a.fill, rest = tslib.__rest(_a, ["background", "fill"]);
    var kind = react.useContext(PageContext).kind;
    return (jsxRuntime.jsx(PageContext.Provider, tslib.__assign({ value: { kind: kind } }, { children: jsxRuntime.jsx("div", tslib.__assign({ className: grommetExpTheme.pageContent({ background: background, kind: kind }), ref: ref }, rest)) })));
});
PageContent.displayName = "PageContent";

var Paragraph = react.forwardRef(function (_a, ref) {
    var color = _a.color, levelProp = _a.level, size = _a.size, rest = tslib.__rest(_a, ["color", "level", "size"]);
    var level = !size ? levelProp : undefined;
    return (jsxRuntime.jsx("p", tslib.__assign({ className: grommetExpTheme.text({ color: color, level: level, size: size }), ref: ref }, rest)));
});
Paragraph.displayName = "Paragraph";

var PageHeader = react.forwardRef(function (_a, ref) {
    var parent = _a.parent, subtitle = _a.subtitle, title = _a.title, rest = tslib.__rest(_a, ["parent", "subtitle", "title"]);
    return (jsxRuntime.jsxs(Header, tslib.__assign({ ref: ref, align: "stretch", direction: "column", gap: "none", pad: { vertical: "medium" } }, rest, { children: [parent, jsxRuntime.jsx(Heading, tslib.__assign({ level: 1 }, { children: title })), subtitle && jsxRuntime.jsx(Paragraph, tslib.__assign({ level: 1 }, { children: subtitle }))] })));
});
PageHeader.displayName = "PageHeader";

var TextInput = react.forwardRef(function (props, ref) {
    return (jsxRuntime.jsx("input", tslib.__assign({ className: grommetExpTheme.textInput, type: "text" }, props)));
});
TextInput.displayName = "TextInput";

exports.Anchor = Anchor;
exports.Box = Box;
exports.Button = Button;
exports.Card = Card;
exports.Footer = Footer;
exports.Form = Form;
exports.FormField = FormField;
exports.Grid = Grid;
exports.Grommet = Grommet;
exports.Header = Header;
exports.Heading = Heading;
exports.Icon = Icon;
exports.NameValueList = NameValueList;
exports.NameValueListContext = NameValueListContext;
exports.NameValuePair = NameValuePair;
exports.Nav = Nav;
exports.Page = Page;
exports.PageContent = PageContent;
exports.PageContext = PageContext;
exports.PageHeader = PageHeader;
exports.Paragraph = Paragraph;
exports.Text = Text;
exports.TextInput = TextInput;
