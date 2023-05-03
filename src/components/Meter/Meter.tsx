import { forwardRef, useMemo } from "react";
import { BackgroundType } from "../Box";
import { Bar } from "./Bar";
import { Circle } from "./Circle";
import { KindType, PatternType, ValuesType, useBounds, useKind } from "./utils";

export type MeterProps = {
  background?: BackgroundType;
  direction?: "horizontal" | "vertical";
  id?: string;
  kind?: KindType;
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
      max: maxProp,
      min: minProp,
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

    const bounds = useBounds(kind, maxProp, minProp, values);

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
    return content;
  }
);

Meter.displayName = "Meter";

export { Meter };
