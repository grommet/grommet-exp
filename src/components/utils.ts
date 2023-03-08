// UNUSED
import { SizeType, SpacingType2 } from "./types";

type PadStyleType = {
  pad?: SizeType;
  padHorizontal?: SizeType;
  padVertical?: SizeType;
  padTop?: SizeType;
  padBottom?: SizeType;
  padStart?: SizeType;
  padEnd?: SizeType;
};

const translatePad = (pad? : SpacingType2) : PadStyleType => {
  const result : PadStyleType = {};
  if (!pad) return result;
  if (typeof pad === 'string') result.pad = pad;
  if (typeof pad === 'object') {
    if (pad.horizontal) result.padHorizontal = pad.horizontal;
    if (pad.vertical) result.padVertical = pad.vertical;
    if (pad.top) result.padTop = pad.top;
    if (pad.bottom) result.padBottom = pad.bottom;
    if (pad.start) result.padStart = pad.start;
    if (pad.end) result.padEnd = pad.end;
  }
  return result;
}
