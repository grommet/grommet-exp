import { __rest } from 'tslib';
import { jsx, jsxs } from 'react/jsx-runtime';
import { forwardRef, useState, useMemo, Children } from 'react';
import { carouselButton } from 'grommet-exp-theme';
import '../Box/index.js';
import '../Footer/index.js';
import { Box } from '../Box/Box.js';
import { Footer } from '../Footer/Footer.js';

const Carousel = forwardRef((_a, ref) => {
    var { children } = _a, rest = __rest(_a, ["children"]);
    const [active, setActive] = useState(0);
    const child = useMemo(() => Children.toArray(children)[active], [active]);
    const controls = Children.map(children, (c, i) => (jsx("button", { className: carouselButton({ selected: active === i }), onClick: () => setActive(i) })));
    return (jsxs(Box, Object.assign({}, rest, { gap: "xsmall" }, { children: [child, jsx(Footer, Object.assign({ justify: "center", gap: "small" }, { children: controls }))] })));
});
Carousel.displayName = "Carousel";

export { Carousel };
