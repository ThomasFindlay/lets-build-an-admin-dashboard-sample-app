import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import style from "./DrawerItem.module.css";
import clsx from "clsx";
import DrawerItem from "./DrawerItem";

const resolveLinkPath = (parentTo, childTo) => `${parentTo}/${childTo}`;

const DrawerItemHeader = props => {
  const { text, icon, items, route, depth, isDrawerExpanded } = props;
  const location = useLocation();

  const [isNavItemExpanded, setIsNavItemExpanded] = useState(
    location.pathname.includes(route)
  );

  const onExpandChange = e => {
    e.preventDefault();
    setIsNavItemExpanded(isNavItemExpanded => !isNavItemExpanded);
  };

  return (
    <>
      <button
        className={clsx(
          "k-drawer-item k-text-left k-d-flex k-border-0 k-pr-4 k-py-4 k-w-full",
          style.drawerItem
        )}
        style={{
          paddingLeft: `${1 + (depth > 1 ? (depth + 5.5) * 0.25 : 0)}rem`,
        }}
        onClick={onExpandChange}
      >
        {icon ? <span className={clsx("k-icon k-mr-4", icon)} /> : null}
        <div className="k-display-flex k-flex-grow k-justify-content-between">
          <span>{text}</span>
          <span
            className={clsx(
              "k-icon k-i-chevron-down",
              style.drawerItemArrow,
              isNavItemExpanded && "k-rotate-180"
            )}
          />
        </div>
      </button>

      {isNavItemExpanded && (
        <div
          className={clsx(
            style.navChildrenBlock,
            !isDrawerExpanded && "k-display-none"
          )}
        >
          {items.map((item, index) => {
            const key = `${item.text}-${index}`;
            return (
              <DrawerItem
                key={key}
                {...item}
                depth={depth + 1}
                route={resolveLinkPath(props.route, item.route)}
                isDrawerExpanded={isDrawerExpanded}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default DrawerItemHeader;
