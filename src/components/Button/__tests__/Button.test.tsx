import "jest-styled-components";
import React from "react";
import { render, screen } from "@testing-library/react-native";
import { Button } from "../Button";
import theme from "@styles/theme";
import { ThemeProvider } from "styled-components/native";

test("the compoonent rendered", () => {
  render(
    <ThemeProvider theme={theme}>
      <Button label="Test" />
    </ThemeProvider>
  );
  screen.debug();
});
