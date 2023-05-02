import { forwardRef, useMemo } from "react";
import { BackgroundType } from "../Box";
import { Bar } from "./Bar";
import { Circle } from "./Circle";
import { BoundsType, KindType, ValuesType } from "./utils";

export type MeterProps = {
  background?: BackgroundType;
  direction?: "horizontal" | "vertical";
  kind?: KindType;
  max?: number | [number, number];
  min?: number | [number, number];
  round?: boolean;
  size?: "small" | "medium" | "large" | "full";
  thickness?: "small" | "medium" | "large";
  type?: "bar" | "circle" | "pie" | "semicircle";
  value?: number;
  values?: ValuesType;
};

const calculateBounds = (values: ValuesType): BoundsType => {
  const result = { pathMax: 0, pathMin: 0, colorMax: 0, colorMin: 0 };
  if (values[0] && Array.isArray(values[0].value)) {
    values.forEach((value) => {
      const [pVal] = value.value as [number, number];
      if (pVal < 0) result.pathMin += pVal;
      if (pVal > 0) result.pathMax += pVal;
    });
    // color max/min should stay 0-100 to align with color names
    result.colorMin = -100;
    result.colorMax = 100;
  } else if (values && values.length > 1) {
    values.forEach((value) => {
      const val = value.value as number;
      if (val < 0) result.pathMin += val;
      if (val > 0) result.pathMax += val;
    });
    result.colorMin = result.pathMin;
    result.colorMax = result.pathMax;
  } else {
    result.pathMax = 100;
    result.colorMax = 100;
  }
  return result;
};

const Meter = forwardRef<SVGElement, MeterProps>(
  (
    {
      background = "contrast",
      direction = "horizontal",
      kind: kindProp,
      max: maxProp,
      min: minProp,
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
    const kind: KindType = useMemo(() => {
      if (kindProp) return kindProp;
      if (!valuesProp) return "single";
      const firstValue = valuesProp[0];
      if (firstValue && Array.isArray(firstValue.value)) return "sequential";
      return "qualitative";
    }, [kindProp, valuesProp]);

    // normalize values to an array of objects
    const values: ValuesType = useMemo(() => {
      if (valuesProp) return valuesProp;
      if (value) return [{ value }];
      return [];
    }, [value, valuesProp]);

    const bounds: BoundsType = useMemo(() => {
      if (minProp !== undefined || maxProp !== undefined) {
        const result = { pathMax: 100, pathMin: 0, colorMax: 100, colorMin: 0 };
        if (Array.isArray(minProp)) {
          result.pathMin = minProp[0];
          result.colorMin = minProp[1];
        } else if (minProp !== undefined) {
          result.pathMin = minProp;
          result.colorMin = minProp;
        }
        if (Array.isArray(maxProp)) {
          result.pathMax = maxProp[0];
          result.colorMax = maxProp[1];
        } else if (maxProp !== undefined) {
          result.pathMax = maxProp;
          result.colorMax = maxProp;
        }
        return result;
      }
      return calculateBounds(values);
    }, [kind, maxProp, minProp, values]);

    let content = null;
    if (type === "bar") {
      content = (
        <Bar
          ref={ref}
          background={background}
          kind={kind}
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
          kind={kind}
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
