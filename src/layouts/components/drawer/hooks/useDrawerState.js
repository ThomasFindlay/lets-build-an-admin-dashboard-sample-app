import { useState, useEffect, useRef, useCallback } from "react";

export const useDrawerState = () => {
  const [isDrawerExpanded, setIsDrawerExpanded] = useState(true);
  const [isHoveringDrawer, setIsHoveringDrawer] = useState(false);

  const openDrawer = useCallback(() => {
    setIsDrawerExpanded(true);
  }, []);

  const closeDrawer = useCallback(() => {
    setIsDrawerExpanded(false);
  }, []);

  const toggleDrawer = useCallback(() => {
    setIsDrawerExpanded(val => !val);
  }, []);

  const startHoveringDrawer = useCallback(() => {
    setIsHoveringDrawer(true);
  }, []);
  const stopHoveringDrawer = useCallback(() => {
    setIsHoveringDrawer(false);
  }, []);

  const drawerRef = useRef(null);

  useEffect(() => {
    if (!drawerRef.current) return;
    const { element } = drawerRef.current;
    element.addEventListener("mouseenter", startHoveringDrawer);
    element.addEventListener("mouseleave", stopHoveringDrawer);
    return () => {
      element.removeEventListener("mouseenter", startHoveringDrawer);
      element.removeEventListener("mouseleave", stopHoveringDrawer);
    };
  }, []);

  return {
    isDrawerExpanded,
    openDrawer,
    closeDrawer,
    toggleDrawer,
    isHoveringDrawer,
    drawerRef,
  };
};
