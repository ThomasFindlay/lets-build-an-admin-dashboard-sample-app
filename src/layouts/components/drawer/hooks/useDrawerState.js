import { useState, useEffect, useRef, useCallback } from "react";
import { useLocalstorageState } from "rooks";

export const useDrawerState = () => {
  const [isDrawerExpanded, setIsDrawerExpanded] = useLocalstorageState(
    "dashboard-app:drawer-expanded",
    true
  );

  const [isHoveringDrawer, setIsHoveringDrawer] = useState(false);
  const drawerRef = useRef(null);

  const openDrawer = useCallback(() => {
    setIsDrawerExpanded(true);
  }, []);

  const closeDrawer = useCallback(() => {
    setIsDrawerExpanded(false);
  }, []);

  const toggleDrawer = useCallback(() => {
    setIsDrawerExpanded(!isDrawerExpanded);
  }, [isDrawerExpanded]);

  const startHoveringDrawer = useCallback(() => {
    setIsHoveringDrawer(true);
  }, []);
  const stopHoveringDrawer = useCallback(() => {
    setIsHoveringDrawer(false);
  }, []);

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
