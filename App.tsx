import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { ThemeProvider } from "styled-components";
import { Provider as ReduxProvider } from "react-redux";

import store from "@redux/storage";
import AppRoutes from "@routes/routes";
import theme from "@styles/theme";

export default function App() {
  return (
    <ReduxProvider store={store}>
      <StatusBar style="light" />
      <ThemeProvider theme={theme}>
        <AppRoutes />
      </ThemeProvider>
    </ReduxProvider>
  );
}
