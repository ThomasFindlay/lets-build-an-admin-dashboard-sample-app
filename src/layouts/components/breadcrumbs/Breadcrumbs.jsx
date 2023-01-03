import { Breadcrumb } from "@progress/kendo-react-layout";
import { drawerItems } from "../drawer/config/drawerItems";
import { useBreadcrumbs } from "./hooks/useBreadcrumbs";

const Breadcrumbs = props => {
  const { breadcrumbs } = useBreadcrumbs(drawerItems);

  return (
    <div {...props}>
      <Breadcrumb data={breadcrumbs} />
    </div>
  );
};

export default Breadcrumbs;
