import { useState, useCallback } from "react";

export const usePopup = (initial = false) => {
  const [open, setOpen] = useState(initial);

  const show = useCallback(() => setOpen(true), []);
  const hide = useCallback(() => setOpen(false), []);
  const toggle = useCallback(() => setOpen((o) => !o), []);

  return { open, show, hide, toggle };
};
