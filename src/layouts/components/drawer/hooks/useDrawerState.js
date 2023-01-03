import { useState, useRef, useCallback } from "react";

export const useDrawerState = () => {
  const [isDrawerExpanded, setIsDrawerExpanded] = useState(true);
  const drawerRef = useRef(null);

  const openDrawer = useCallback(() => {
    setIsDrawerExpanded(true);
  }, []);

  const closeDrawer = useCallback(() => {
    setIsDrawerExpanded(false);
  }, []);

  const toggleDrawer = useCallback(() => {
    setIsDrawerExpanded(val => !val);
  }, []);

  return {
    isDrawerExpanded,
    openDrawer,
    closeDrawer,
    toggleDrawer,
    drawerRef,
  };
};
