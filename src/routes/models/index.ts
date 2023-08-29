import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { GetResponse } from "@services/products/getProducts";

export type propsNavigationStack = {
  Home: undefined;
  Product: { product: GetResponse };
  Cart: undefined;
};

export type propsStack = StackNavigationProp<propsNavigationStack>;
export type ProductNavigationProp = StackNavigationProp<
  propsNavigationStack,
  "Product"
>;
export type ProductRouteProp = RouteProp<propsNavigationStack, "Product">;
