import { forwardRef, useCallback, useMemo, useState } from "react";
import { tabsButton, tabsHeader } from "grommet-exp-theme";
import { Box } from "../Box";
import { TabsContext } from "./TabsContext";

type TabsProps = {
  children?: JSX.Element[];
};

const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  ({ children, ...rest }: TabsProps, ref): JSX.Element => {
    const [labels, setLabels] = useState<string[]>([]);
    const [active, setActive] = useState<string>("");

    const addLabel = useCallback((label: string) => {
      setLabels((prev) => {
        if (prev.includes(label)) return prev;
        return [...prev, label];
      });
      setActive((prev) => {
        if (prev) return prev;
        return label;
      });
    }, []);

    const removeLabel = useCallback((label: string) => {
      setLabels((prev) => {
        if (!prev.includes(label)) return prev;
        return prev.filter((l) => l !== label);
      });
    }, []);

    const contextValue = useMemo(
      () => ({ active, addLabel, removeLabel }),
      [active]
    );

    return (
      <TabsContext.Provider value={contextValue}>
        <Box ref={ref} {...rest}>
          <Box
            as="header"
            className={tabsHeader}
            direction="row"
            justify="start"
          >
            {labels.map((label) => (
              <button
                key={label}
                className={tabsButton({ selected: active === label })}
                onClick={() => setActive(label)}
              >
                {label}
              </button>
            ))}
          </Box>
          {children}
        </Box>
      </TabsContext.Provider>
    );
  }
);

Tabs.displayName = "Tabs";

export { Tabs };
