import { useLocation } from "react-router-dom";
import { useMemo } from "react";

export const useBreadcrumbs = navConfig => {
  const { pathname } = useLocation();
  const breadcrumbs = useMemo(() => {
    const pathParts = pathname.split("/").filter(Boolean);

    // If there are no path parts it means we are on the home page.
    // Therefore, we can skip all the logic and just return the first drawer item.
    if (!pathParts.length) {
      const home = navConfig[0];

      return [
        {
          id: home.route,
          text: home.text,
          iconClass: home.icon,
        },
      ];
    }

    const breadcrumbsList = [];
    let currentPathPart;
    let currentDrawerItem;

    // We need to loop through all the url parts to find the correct drawer items.
    while (pathParts.length) {
      // During each loop, we remove the first url part
      currentPathPart = pathParts.shift();

      // Find the root drawer item
      if (!breadcrumbsList.length) {
        currentDrawerItem = navConfig.find(
          item => item.route === `/${currentPathPart}`
        );
      } else {
        // The currentDrawerItem is a drawer item header so we need to find the matching drawer item inside of the `items` array
        currentDrawerItem = currentDrawerItem.items.find(
          item => item.route === currentPathPart
        );
      }

      // Add config for the current url path part
      breadcrumbsList.push({
        id: currentDrawerItem.route,
        text: currentDrawerItem.text,
        // Include the icon class if one is present
        ...(currentDrawerItem.icon && {
          iconClass: currentDrawerItem.icon,
        }),
      });

      // If the current drawer item doesn't have any nested items
      // it means we need to stop, as we have reached the last navigation item
      if (!currentDrawerItem.items) {
        break;
      }
    }

    return breadcrumbsList;
  }, [navConfig, pathname]);

  return {
    breadcrumbs,
  };
};
