import React from "react";
import BinaryConverter from "../projects/binaryConverter/binaryConverter.js";
import RadiusPreviewer from '../projects/border-Radius-Previewer/radiusPreviewer.js'

const Routes = [
  {
    path: "/binaryConverter",
    exact: true,
    sidebar: "Binary converter",
    main: () => <BinaryConverter/>,
  },
  {
    path: "/borderRadiusPreviewer",
    exact: true,
    sidebar: "Border Radius Previewer",
    main: () => <RadiusPreviewer/>,
  }
];

export default Routes;
