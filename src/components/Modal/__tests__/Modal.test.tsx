import "jest-styled-components";
import React from "react";
import { render, screen } from "@testing-library/react-native";
import { Modal } from "../Modal";
import { ThemeProvider } from "styled-components/native";
import theme from "@styles/theme";

test("the compoonent rendered", () => {
  render(
    <ThemeProvider theme={theme}>
      <Modal open={true} closeModal={() => {}} sucess={() => {}} />
    </ThemeProvider>
  );
  screen.debug();
});
