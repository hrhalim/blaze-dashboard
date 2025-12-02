import { useState } from "react";

export const useTabs = (defaultIndex = 0) => {
  const [active, setActive] = useState<number>(defaultIndex);

  const changeTab = (index: number) => {
    setActive(index);
  };

  return { active, changeTab };
};
