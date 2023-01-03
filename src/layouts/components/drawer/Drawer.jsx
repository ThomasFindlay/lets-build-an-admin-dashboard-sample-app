import {
  Drawer,
  DrawerContent,
  DrawerNavigation,
} from "@progress/kendo-react-layout";
import clsx from "clsx";
import DrawerItem from "./components/DrawerItem";
import { drawerItems } from "./config/drawerItems";
import style from "./Drawer.module.css";
import { useDrawerState } from "./hooks/useDrawerState";

const AppDrawer = props => {
  const { isDrawerExpanded, toggleDrawer, drawerRef } = useDrawerState();

  return (
    <Drawer
      className={style.drawer}
      expanded={isDrawerExpanded}
      position={"start"}
      mode={"push"}
      mini={true}
    >
      <DrawerNavigation ref={drawerRef}>
        <div className={style.titleContainer}>
          {isDrawerExpanded ? (
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
                isDrawerExpanded && style.drawerTogglerIconOpen
              )}
            />
          </button>
        </div>
        <ul className="k-drawer-items">
          {drawerItems.map((item, idx) => {
            return (
              <DrawerItem
                key={`${item.text}-${idx}`}
                {...item}
                isDrawerExpanded={isDrawerExpanded}
              />
            );
          })}
        </ul>
      </DrawerNavigation>
      <DrawerContent>{props.children}</DrawerContent>
    </Drawer>
  );
};

export default AppDrawer;
