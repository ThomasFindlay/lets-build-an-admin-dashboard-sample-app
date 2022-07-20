import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "@progress/kendo-theme-material/dist/all.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";

const WhatIsKendoReact = lazy(() =>
  import("./views/dashboard/what-is-kendoreact/WhatIsKendoReact")
);
const AnimationOverview = lazy(() =>
  import("./views/dashboard/kendo-components/animation/AnimationOverview")
);

const AnimationGettingStarted = lazy(() =>
  import("./views/dashboard/kendo-components/animation/AnimationGettingStarted")
);

const ButtonsOverview = lazy(() =>
  import("./views/dashboard/kendo-components/buttons/ButtonsOverview")
);

const ButtonsGettingStarted = lazy(() =>
  import("./views/dashboard/kendo-components/buttons/ButtonsGettingStarted")
);

const ChartsOverview = lazy(() =>
  import("./views/dashboard/kendo-components/charts/ChartsOverview")
);

const ChartsGettingStarted = lazy(() =>
  import("./views/dashboard/kendo-components/charts/ChartsGettingStarted")
);

const StylingAndThemesOverview = lazy(() =>
  import("./views/dashboard/kendo-styling-and-themes/StylingAndThemesOverview")
);

const CustomizingThemes = lazy(() =>
  import("./views/dashboard/kendo-styling-and-themes/CustomizingThemes")
);

const DefaultThemeGettingStarted = lazy(() =>
  import(
    "./views/dashboard/kendo-styling-and-themes/default-theme/DefaultThemeGettingStarted"
  )
);

const DefaultThemeOverview = lazy(() =>
  import(
    "./views/dashboard/kendo-styling-and-themes/default-theme/DefaultThemeOverview"
  )
);

const CommonFeatures = lazy(() =>
  import("./views/dashboard/common-features/CommonFeatures")
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route element={<DashboardLayout />}>
            <Route index element={<WhatIsKendoReact />} />
            <Route path="components">
              <Route path="animation">
                <Route path="overview" element={<AnimationOverview />} />
                <Route
                  path="getting-started"
                  element={<AnimationGettingStarted />}
                />
              </Route>
              <Route path="buttons">
                <Route path="overview" element={<ButtonsOverview />} />
                <Route
                  path="getting-started"
                  element={<ButtonsGettingStarted />}
                />
              </Route>
              <Route path="charts">
                <Route path="overview" element={<ChartsOverview />} />
                <Route
                  path="getting-started"
                  element={<ChartsGettingStarted />}
                />
              </Route>
            </Route>
            <Route path="styling-and-themes">
              <Route path="overview" element={<StylingAndThemesOverview />} />
              <Route
                path="customizing-themes"
                element={<CustomizingThemes />}
              />
              <Route path="default-theme">
                <Route path="overview" element={<DefaultThemeOverview />} />
                <Route
                  path="getting-started"
                  element={<DefaultThemeGettingStarted />}
                />
              </Route>
            </Route>
            <Route path="common-features" element={<CommonFeatures />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
