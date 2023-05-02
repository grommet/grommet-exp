import { forwardRef } from "react";
import { legend, legendContainer, legendSwatch } from "grommet-exp-theme";
import { Box } from "../Box";
import {
  KindType,
  ValuesType,
  valueColor,
  valuePattern,
  useKind,
  useBounds,
} from "../Meter";

type LegendProps = {
  id?: string;
  kind?: KindType;
  max?: number | [number, number];
  min?: number | [number, number];
  values: ValuesType;
};

const Legend = forwardRef<HTMLHeadingElement, LegendProps>(
  (
    { id, kind: kindProp, max, min, values, ...rest }: LegendProps,
    ref
  ): JSX.Element => {
    const kind = useKind(kindProp, values);
    const bounds = useBounds(kind, max, min, values);
    return (
      <Box ref={ref} className={legendContainer} id={id} flex="grow" {...rest}>
        <Box className={legend} flex={false}>
          {values.map((valueArg, index) => {
            const { label, pattern: patternName } = valueArg;
            const colorValue =
              typeof valueArg.value === "number"
                ? valueArg.value
                : valueArg.value[1];
            const fill = valueColor({
              kind,
              bounds,
              value: colorValue,
              index,
            });
            let patternId;
            let pattern;
            if (patternName)
              [patternId, pattern] = valuePattern(
                id || "legend",
                patternName,
                fill
              );

            return (
              <Box key={label} direction="row" gap="small" align="center">
                <svg
                  className={legendSwatch}
                  viewBox="0 0 24 24"
                  width={24}
                  height={24}
                >
                  {pattern && <defs>{pattern}</defs>}
                  <rect
                    x={0}
                    y={0}
                    width={24}
                    height={24}
                    fill={patternId || fill}
                  />
                </svg>
                {label}
              </Box>
            );
          })}
        </Box>
      </Box>
    );
  }
);

Legend.displayName = "Legend";

export { Legend };
