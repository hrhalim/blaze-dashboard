import { useState, useCallback } from "react";

export const useToggle = (initial = false) => {
  const [open, setOpen] = useState<boolean>(initial);

  const toggle = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  const close = useCallback(() => setOpen(false), []);
  const openFn = useCallback(() => setOpen(true), []);

  return { open, toggle, close, openFn };
};
