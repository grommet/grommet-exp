import { Children, forwardRef, useMemo, useState } from "react";
import { button, carouselButton } from "grommet-exp-theme";
import { Box } from "../Box";
import { Footer } from "../Footer";

type CarouselProps = {
  children?: React.ReactNode;
};

const Carousel = forwardRef<HTMLDivElement, CarouselProps>(
  ({ children, ...rest }, ref): JSX.Element => {
    const [active, setActive] = useState<number>(0);
    const child = useMemo(() => Children.toArray(children)[active], [active]);
    const controls = Children.map(children, (c, i) => (
      <button
        className={carouselButton({ selected: active === i })}
        onClick={() => setActive(i)}
      />
    ));
    return (
      <Box {...rest} gap="xsmall">
        {child}
        <Footer justify="center" gap="small">
          {controls}
        </Footer>
      </Box>
    );
  }
);

Carousel.displayName = "Carousel";

export { Carousel };
