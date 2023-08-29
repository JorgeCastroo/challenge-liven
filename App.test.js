import React from "react";
import renderer from "react-test-renderer";

import App from "./App";
import { ThemeProvider } from "styled-components/native";
import theme from "@styles/theme";

describe("<App />", () => {
  it("has 1 child", () => {
    const tree = renderer
      .create(
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      )
      .toJSON();
    expect(tree.children.length).toBe(1);
  });
});
