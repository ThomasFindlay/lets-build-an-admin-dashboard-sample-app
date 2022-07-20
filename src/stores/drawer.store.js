import create from "zustand";

export const useDrawerStore = create((set, get) => {
  return {
    isDrawerOpen: true,
    isHoveringDrawer: false,
    startHoveringDrawer: () => set({ isHoveringDrawer: true }),
    stopHoveringDrawer: () => set({ isHoveringDrawer: false }),
    openDrawer: () => set({ isDrawerOpen: true }),
    closeDrawer: () => set({ isDrawerOpen: false }),
    toggleDrawer: () => set({ isDrawerOpen: !get().isDrawerOpen }),
  };
});