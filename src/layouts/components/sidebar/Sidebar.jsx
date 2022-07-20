import {
  Drawer,
  DrawerContent,
  DrawerNavigation,
} from "@progress/kendo-react-layout";
import { pick } from "lodash-es";
import clsx from "clsx";
import { useRef, useLayoutEffect } from "react";
import { useDrawerStore } from "../../../stores/drawer.store";
import shallow from "zustand/shallow";
import DrawerItem from "./components/DrawerItem";
import { drawerItems } from "./config/drawerItems";
import style from "./Sidebar.module.css";

const Sidebar = props => {
  const {
    isDrawerOpen,
    toggleDrawer,
    isHoveringDrawer,
    startHoveringDrawer,
    stopHoveringDrawer,
  } = useDrawerStore(
    store =>
      pick(store, [
        "isDrawerOpen",
        "toggleDrawer",
        "isHoveringDrawer",
        "startHoveringDrawer",
        "stopHoveringDrawer",
      ]),
    shallow
  );

  const drawerRef = useRef(null);

  useLayoutEffect(() => {
    if (!drawerRef.current) return;
    const { element } = drawerRef.current;
    element.addEventListener("mouseenter", startHoveringDrawer);
    element.addEventListener("mouseleave", stopHoveringDrawer);
    return () => {
      element.removeEventListener("mouseenter", startHoveringDrawer);
      element.removeEventListener("mouseleave", stopHoveringDrawer);
    };
  }, []);

  return (
    <Drawer
      className={style.drawer}
      expanded={isDrawerOpen || isHoveringDrawer}
      position={"start"}
      mode={"push"}
      mini={true}
    >
      <DrawerNavigation ref={drawerRef}>
        <div className={style.titleContainer}>
          {isDrawerOpen || isHoveringDrawer ? (
            <h1 className={style.title}>KendoReact</h1>
          ) : null}
          <button
            className={clsx(
              "k-button k-button-md k-rounded-md k-button-flat k-button-flat-base",
              style.drawerTogglerBtn
            )}
            onClick={toggleDrawer}
          >
            <span
              className={clsx(
                `k-icon k-i-arrow-chevron-right`,
                style.drawerTogglerIcon,
                isDrawerOpen && style.drawerTogglerIconOpen
              )}
            />
          </button>
        </div>
        <ul className="k-drawer-items">
          {drawerItems.map((item, idx) => {
            return <DrawerItem key={`${item.text}-${idx}`} {...item} />;
          })}
        </ul>
      </DrawerNavigation>
      <DrawerContent>{props.children}</DrawerContent>
    </Drawer>
  );
};

export default Sidebar;
