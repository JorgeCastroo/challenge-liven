import React from "react";
import { FlatList } from "react-native";

import { AntDesign, Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import * as S from "./styles";
import { Card } from "./components/Card/Card";
import { Button } from "@components/Button/Button";

import theme from "@styles/theme";
import { useAppSelector } from "@redux/hooks";

export const Cart: React.FC = () => {
  const navigation = useNavigation();

  const { products, purchaseTotal } = useAppSelector((state) => state.cart);

  return (
    <S.Container>
      <S.Header>
        <AntDesign
          name="left"
          size={18}
          color="white"
          onPress={() => navigation.goBack()}
        />
        <S.Title>CART</S.Title>
      </S.Header>
      {!products?.length && (
        <S.WrappedNotFound>
          <Feather
            name="shopping-bag"
            size={100}
            color={theme.colors.primary}
          />
          <S.NotFound>Oops! It looks like the cart is empty for now</S.NotFound>
        </S.WrappedNotFound>
      )}
      <FlatList
        key={"#"}
        keyExtractor={(item) => "#" + item.id + Math.random()}
        renderItem={(item) => <Card data={item.item} />}
        data={products}
      ></FlatList>
      <S.WrappedDelivery>
        <S.Delivery>Delivery</S.Delivery>
        <S.DeliveryType>Free</S.DeliveryType>
      </S.WrappedDelivery>
      <S.WrappedButton>
        <Button
          type="primary"
          label={
            products?.length
              ? `Buy for R$ ${purchaseTotal.toFixed(2)}`
              : "Go back shopping"
          }
          onPress={() => (!products?.length ? navigation.goBack() : undefined)}
        />
      </S.WrappedButton>
    </S.Container>
  );
};
