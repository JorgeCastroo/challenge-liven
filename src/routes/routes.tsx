import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";

import { propsNavigationStack } from "./models";
import { Home } from "@screens/Home/Home";
import { Product } from "@screens/Product/Product";
import { Cart } from "@screens/Cart/Cart";

const AppRoutes: React.FC = () => {
  const { Navigator, Screen } = createStackNavigator<propsNavigationStack>();
  return (
    <NavigationContainer>
      <Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <Screen name="Home" component={Home} />
        <Screen name="Product" component={Product} />
        <Screen name="Cart" component={Cart} />
      </Navigator>
    </NavigationContainer>
  );
};

export default AppRoutes;
