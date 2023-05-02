import { structuredTokens } from "hpe-design-tokens";
import { BackgroundType } from "../Box";

export type PatternType = "dots" | "diagonals";

export type ValuesType = {
  highlight?: boolean;
  label?: string;
  onClick?: (event: React.MouseEvent) => void;
  onHover?: (over: boolean) => void;
  pattern?: PatternType;
  // when value is an array,
  // the first number is used to calculate the length of the path
  // and the second number is used for the stroke color
  value: number | [number, number];
}[];

export type KindType = "qualitative" | "sequential" | "divergent" | "single";

export type BoundsType = {
  pathMax: number;
  pathMin: number;
  colorMax: number;
  colorMin: number;
};

export type GraphicProps = {
  background: BackgroundType;
  bounds: BoundsType;
  direction?: "horizontal" | "vertical";
  id?: string;
  kind: KindType;
  pattern?: "dots" | "diagonals";
  round?: boolean;
  size?: "small" | "medium" | "large" | "full";
  thickness?: "small" | "medium" | "large";
  type?: "bar" | "circle" | "pie" | "semicircle";
  values?: ValuesType;
};

type qualitativeSteps = 1 | 2 | 3 | 4 | 5 | 6 | 7;
type sequentialSteps = 0 | 20 | 30 | 50 | 70 | 80 | 100;
type divergentSteps = 30 | 70 | 100;

type ValueColorArgs = {
  kind: KindType;
  bounds: BoundsType;
  value: number;
  index: number;
};

export const valueColor = ({
  kind,
  bounds,
  value,
  index,
}: ValueColorArgs): string => {
  const dataviz = structuredTokens.color.dataviz;
  const max = bounds.colorMax;
  const min = bounds.colorMin;
  let result = dataviz.single;
  if (kind === "qualitative") {
    const step: qualitativeSteps = ((index % 7) + 1) as qualitativeSteps;
    result = dataviz.qualitative[step];
  } else if (kind === "sequential") {
    const step: sequentialSteps = (Math.round((value / max) * 10) *
      10) as sequentialSteps;
    result = dataviz.sequential[step];
  } else if (kind === "divergent") {
    if (value > 0) {
      const step: divergentSteps = (Math.round((value / max) * 10) *
        10) as divergentSteps;
      result = dataviz.divergent[`positive${step}`];
    } else if (value < 0) {
      const step: divergentSteps = (Math.round(
        (Math.abs(value) / Math.abs(min)) * 10
      ) * 10) as divergentSteps;
      result = dataviz.divergent[`negative${step}`];
    } else {
      result = dataviz.divergent.center;
    }
  }
  return result;
};

export const backgroundColor = (name: BackgroundType): string => {
  return structuredTokens.color.background[name];
};

const POST_DECIMAL_DIGITS = 10;

export const baseUnit = 24;

export const polarToCartesian = (
  centerX: number,
  centerY: number,
  radius: number,
  angleInDegrees: number
): { x: number; y: number } => {
  const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians),
  };
};

export const arcCommands = (
  centerX: number,
  centerY: number,
  radius: number,
  startAngle: number,
  endAngle: number
): string => {
  // handle that we can't draw a complete circle
  let normalizedEndAngle = endAngle;
  /* 
   added endAngle - startAngle >= 360 
   for SemiCircle the endAngle will never be greater then startAngle 
   since it starts with a startAngle of 270.
 */
  if (endAngle > startAngle && endAngle - startAngle >= 360) {
    normalizedEndAngle = startAngle + 359.99;
  }
  const start = polarToCartesian(centerX, centerY, radius, normalizedEndAngle);
  const end = polarToCartesian(centerX, centerY, radius, startAngle);
  const arcSweep = normalizedEndAngle - startAngle <= 180 ? "0" : "1";
  const d = [
    "M",
    start.x.toFixed(POST_DECIMAL_DIGITS),
    start.y.toFixed(POST_DECIMAL_DIGITS),
    "A",
    radius.toFixed(POST_DECIMAL_DIGITS),
    radius.toFixed(POST_DECIMAL_DIGITS),
    0,
    arcSweep,
    0,
    end.x.toFixed(POST_DECIMAL_DIGITS),
    end.y.toFixed(POST_DECIMAL_DIGITS),
  ].join(" ");
  return d;
};

/* TranslatedEngAngle will now take the value of the
startAngle + anglePer * value and mod by 360. This was added
to take account the startAngle not being 0. So no matter the
value it will be % 360 to get the correct angle. 
*/
export const translateEndAngle = (
  startAngle: number,
  anglePer: number,
  value: number
): number => Math.max(0, startAngle + anglePer * value) % 360;

export const strokePattern = (
  idArg: string,
  patternName: PatternType | undefined,
  stroke: string
): [string, JSX.Element] => {
  const id = `${idArg}-${patternName}-${stroke}`;
  let element = null;
  if (patternName === "dots") {
    element = (
      <pattern
        key={stroke}
        id={id}
        x={0}
        y={0}
        width={8}
        height={8}
        patternUnits="userSpaceOnUse"
      >
        <rect
          x={0}
          y={0}
          width={8}
          height={8}
          fill={stroke}
          fillOpacity={0.5}
        />
        <circle cx={4} cy={4} r={3} fill={stroke} />
      </pattern>
    );
  } else if (patternName === "diagonals") {
    element = (
      <pattern
        key={stroke}
        id={id}
        x={0}
        y={0}
        width={12}
        height={12}
        patternUnits="userSpaceOnUse"
      >
        <line
          x1="9"
          y1="0"
          x2="0"
          y2="9"
          stroke={stroke}
          strokeWidth="3"
          strokeLinecap="square"
        />
        <line
          x1="12"
          y1="9"
          x2="9"
          y2="12"
          stroke={stroke}
          strokeWidth="3"
          strokeLinecap="square"
        />
      </pattern>
    );
  } else {
    element = (
      <pattern
        key={stroke}
        id={id}
        x={0}
        y={0}
        width={8}
        height={8}
        patternUnits="userSpaceOnUse"
      >
        <rect x={0} y={0} width={8} height={8} fill={stroke} />
      </pattern>
    );
  }
  return [`url(#${id})`, element];
};
