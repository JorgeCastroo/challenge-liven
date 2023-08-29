import "jest-styled-components";
import React from "react";
import { render, screen } from "@testing-library/react-native";
import { Card } from "../Card";
import theme from "@styles/theme";
import { ThemeProvider } from "styled-components/native";

test("the compoonent rendered", () => {
  render(
    <ThemeProvider theme={theme}>
      <Card image="" onPress={() => {}} price={20} rate={20} title="Test" />
    </ThemeProvider>
  );
  screen.debug();
});
