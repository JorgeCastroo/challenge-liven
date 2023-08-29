import "jest-styled-components";
import React from "react";
import { render, screen } from "@testing-library/react-native";
import { Asside } from "../Asside";
import { ThemeProvider } from "styled-components/native";
import theme from "@styles/theme";

test("the compoonent rendered", () => {
  render(
    <ThemeProvider theme={theme}>
      <Asside
        open={true}
        closeModal={() => {}}
        selectedFilter={() => {}}
        filter="Test"
      />
    </ThemeProvider>
  );
  screen.debug();
});
