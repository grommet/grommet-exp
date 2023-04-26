import { __rest } from 'tslib';
import { jsx } from 'react/jsx-runtime';
import { forwardRef } from 'react';
import '../Box/index.js';
import { Box } from '../Box/Box.js';

const Card = forwardRef((_a, ref) => {
    var { elevation = "medium", flex = false, gap = "small", pad = "medium", round = "large" } = _a, rest = __rest(_a, ["elevation", "flex", "gap", "pad", "round"]);
    return (jsx(Box, Object.assign({ ref: ref, elevation: elevation, flex: flex, gap: gap, pad: pad, round: round }, rest)));
});
Card.displayName = "Card";

export { Card };
