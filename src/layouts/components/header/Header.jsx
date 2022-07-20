import {
  AppBar,
  AppBarSection,
  AppBarSpacer,
  Avatar,
  Menu,
  MenuItem,
} from "@progress/kendo-react-layout";
import { Badge, BadgeContainer } from "@progress/kendo-react-indicators";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Input } from "@progress/kendo-react-inputs";
import style from "./Header.module.css";
import { useDrawerStore } from "../../../stores/drawer.store";
import clsx from "clsx";
// TODO: Add menu dropdown to the avatar
const kendokaAvatar =
  "https://www.telerik.com/kendo-react-ui-develop/images/kendoka-react.png";

const FormInput = props => {
  return (
    <div className="k-relative">
      <span
        className={clsx(
          "k-absolute k-icon k-i-search k-ml-2 k-middle-start",
          style.searchIcon
        )}
      />
      <Input className={style.searchInput} {...props} />
    </div>
  );
};

const Header = props => {
  const toggleDrawer = useDrawerStore(store => store.toggleDrawer);

  const onSearch = q => {
    console.log("on search", q);
  };

  return (
    <div>
      <AppBar>
        <AppBarSpacer
          style={{
            width: 32,
          }}
        />

        <AppBarSection>
          <Form
            initialValues={{
              query: "",
            }}
            onSubmit={onSearch}
            render={formRenderProps => {
              return (
                <FormElement>
                  <fieldset className="k-form-fieldset">
                    <Field
                      id="search"
                      name="search"
                      placeholder="Search"
                      value={formRenderProps.valueGetter("search")}
                      component={FormInput}
                    />
                  </fieldset>
                </FormElement>
              );
            }}
          />
        </AppBarSection>

        <AppBarSpacer />

        <AppBarSection className="actions">
          <button className="k-button k-button-md k-rounded-md k-button-flat k-button-flat-base">
            <BadgeContainer>
              <span className="k-icon k-i-bell" />
              <Badge
                shape="dot"
                themeColor="info"
                size="small"
                position="inside"
              />
            </BadgeContainer>
          </button>
        </AppBarSection>

        <AppBarSection>
          <span className="k-appbar-separator" />
        </AppBarSection>

        <AppBarSection>
          <Avatar type="image">
            <img src={kendokaAvatar} alt="Avatar" />
          </Avatar>
          <Menu items={items} />
        </AppBarSection>
      </AppBar>
    </div>
  );
};

export default Header;
