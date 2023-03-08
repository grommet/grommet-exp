import { forwardRef, ReactNode } from "react";
import { grommet } from "grommet-exp-theme";

type GrommetProps = {
  children?: ReactNode | ReactNode[];
  // themeMode?: string;
};

const Grommet = forwardRef<HTMLDivElement, GrommetProps>(
  ({ children, ...rest }: GrommetProps, ref): JSX.Element => {
    return (
      <div className={grommet} ref={ref} {...rest}>
        {children}
      </div>
    );
  }
);

Grommet.displayName = "Grommet";

export { Grommet };
