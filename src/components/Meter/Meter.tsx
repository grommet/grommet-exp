import { forwardRef, useMemo } from "react";
import { Box, BackgroundType } from "../Box";
import { Legend } from "../Legend";
import { Bar } from "./Bar";
import { Circle } from "./Circle";
import { KindType, PatternType, ValuesType, useBounds, useKind } from "./utils";

export type MeterProps = {
  background?: BackgroundType;
  direction?: "horizontal" | "vertical";
  id?: string;
  kind?: KindType;
  legend?: boolean;
  max?: number | [number, number];
  min?: number | [number, number];
  pattern?: PatternType;
  round?: boolean;
  size?: "small" | "medium" | "large" | "full";
  thickness?: "small" | "medium" | "large";
  type?: "bar" | "circle" | "pie" | "semicircle";
  value?: number;
  values?: ValuesType;
};

const Meter = forwardRef<SVGElement, MeterProps>(
  (
    {
      background = "contrast",
      direction = "horizontal",
      id,
      kind: kindProp,
      legend,
      max,
      min,
      pattern,
      round,
      size = "medium",
      thickness = "medium",
      type = "bar",
      value,
      values: valuesProp,
      ...rest
    },
    ref
  ): JSX.Element | null => {
    // normalize kind
    const kind = useKind(kindProp, valuesProp);

    // normalize values to an array of objects
    const values: ValuesType = useMemo(() => {
      if (valuesProp) return valuesProp;
      if (value) return [{ value }];
      return [];
    }, [value, valuesProp]);

    const bounds = useBounds(kind, max, min, values);

    let content = null;
    if (type === "bar") {
      content = (
        <Bar
          ref={ref}
          background={background}
          id={id}
          kind={kind}
          pattern={pattern}
          bounds={bounds}
          round={round}
          values={values}
          size={size}
          thickness={thickness}
          direction={direction}
          {...rest}
        />
      );
    } else if (type === "circle" || type === "pie" || type === "semicircle") {
      content = (
        <Circle
          ref={ref}
          background={background}
          id={id}
          kind={kind}
          pattern={pattern}
          bounds={bounds}
          round={round}
          values={values}
          size={size}
          thickness={thickness}
          type={type}
          {...rest}
        />
      );
    }

    if (legend) {
      content = (
        <Box direction="row" wrap gap="small" align="center" flex={false}>
          {content}
          <Legend
            id={id ? `${id}-legend` : undefined}
            kind={kind}
            max={max}
            min={min}
            values={values}
          />
        </Box>
      );
    }

    return content;
  }
);

Meter.displayName = "Meter";

export { Meter };
