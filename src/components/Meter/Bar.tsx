import { forwardRef, useMemo } from "react";
import { structuredTokens } from "hpe-design-tokens";
import { GraphicProps, backgroundColor, valueColor } from "./utils";

const Bar = forwardRef<SVGElement, GraphicProps>(
  (
    {
      background,
      bounds,
      direction,
      kind,
      round,
      size = "medium",
      thickness: thicknessProp = "medium",
      type, // ignored
      values,
      ...rest
    },
    ref // doesn't work with <svg />?
  ): JSX.Element => {
    const length = useMemo(() => {
      if (size === "full") return 288;
      return parseInt(structuredTokens.content[size] || size, 10);
    }, [size]);
    const thickness = parseInt(
      structuredTokens.spacing[thicknessProp].desktop,
      10
    );
    // account for the round cap, if any
    const capOffset = round ? thickness / 2 : 0;
    const mid = thickness / 2;

    const someHighlight = (values || []).some((v) => v.highlight);
    let start =
      direction === "horizontal"
        ? capOffset
        : (bounds.pathMax * (length - 2 * capOffset)) / bounds.pathMax;

    const paths = (values || [])
      .reduce((acc: JSX.Element[], valueArg, index) => {
        const pathValue =
          typeof valueArg.value === "number"
            ? valueArg.value
            : valueArg.value[0];
        const colorValue =
          typeof valueArg.value === "number"
            ? valueArg.value
            : valueArg.value[1];
        if (pathValue > 0) {
          const { highlight, label, onHover, value, ...pathRest } = valueArg;
          const key = `p-${index}`;
          const delta = (pathValue * (length - 2 * capOffset)) / bounds.pathMax;
          const d =
            direction === "horizontal"
              ? `M ${start},${mid} L ${start + delta},${mid}`
              : `M ${mid},${start} L ${mid},${start - delta}`;
          const stroke = valueColor({
            kind,
            bounds,
            value: colorValue,
            index,
          });
          let hoverProps;
          if (onHover) {
            hoverProps = {
              onMouseOver: () => onHover(true),
              onMouseLeave: () => onHover(false),
            };
          }
          if (direction === "horizontal") {
            start += delta;
          } else {
            start -= delta;
          }

          const result = (
            <path
              key={key}
              d={d}
              fill="none"
              stroke={someHighlight && !highlight ? background : stroke}
              strokeWidth={direction === "horizontal" ? thickness : length}
              strokeLinecap={round ? "round" : "butt"}
              {...hoverProps}
              {...pathRest}
            />
          );

          acc.push(result);
        }
        return acc;
      }, [])
      .reverse(); // reverse so the caps looks right

    let width;
    if (direction === "horizontal") {
      width = size === "full" ? "100%" : length;
    } else {
      width = size === "full" ? "100%" : thickness;
    }

    const backgroundPath =
      direction === "horizontal"
        ? `M ${capOffset},${mid} L ${length - capOffset},${mid}`
        : `M ${mid},${capOffset} L ${mid},${length - capOffset}`;

    return (
      <svg
        viewBox={
          direction === "horizontal"
            ? `0 0 ${length} ${thickness}`
            : `0 0 ${thickness} ${length}`
        }
        preserveAspectRatio="none"
        width={width}
        height={direction === "horizontal" ? thickness : length}
        {...rest}
      >
        <path
          d={backgroundPath}
          fill="none"
          stroke={backgroundColor(background)}
          strokeWidth={thickness}
          strokeLinecap={round ? "round" : "square"}
        />
        {paths}
      </svg>
    );
  }
);

Bar.displayName = "Bar";

export { Bar };
