import { useContext, useEffect } from "react";
import { TabsContext, TabsContextType } from "../Tabs";

type TabProps = {
  children: JSX.Element;
  label?: string;
};

const Tab = ({ children, label = "Tab" }: TabProps) => {
  const { active, addLabel, removeLabel } = useContext(
    TabsContext
  ) as TabsContextType;
  useEffect(() => addLabel(label), [label]);
  if (active === label) return children;
  return null;
};

Tab.displayName = "Tab";

export { Tab };
