import React, { useState } from "react";
import { ScrollView } from "react-native";
import { AntDesign, FontAwesome } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

import * as S from "./styles";
import { ProductRouteProp, propsStack } from "@routes/models";
import { Button } from "@components/Button/Button";
import { useAppDispatch, useAppSelector } from "@redux/hooks";
import { setCart } from "@redux/reducer/cart/cart";
import { Modal } from "@components/Modal/Modal";

interface ProductProps {
  route: ProductRouteProp;
}

export const Product: React.FC<ProductProps> = ({ route }) => {
  const [openModal, setOpenModal] = useState(false);
  const navigation = useNavigation<propsStack>();
  const { products } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();

  const product = route.params.product;
  product.amount = 1;

  const foundProduct = products?.find((item) => item.id === product.id);

  // Constantly responsible for product restructuring

  const repeatedProduct = foundProduct
    ? JSON.parse(JSON.stringify(foundProduct))
    : null;

  const handleAddProduct = () => {
    if (repeatedProduct) {
      setOpenModal(true);
      repeatedProduct.id = repeatedProduct.id + Math.random();
    } else {
      dispatch(setCart(product));
      navigation.navigate("Home");
    }
  };

  const handleReAddProduct = () => {
    setOpenModal(false);
    if (repeatedProduct) {
      repeatedProduct.id = repeatedProduct.id + Math.random();
      dispatch(setCart(repeatedProduct));
    }
    navigation.navigate("Home");
  };
  return (
    <S.Container>
      <StatusBar style="dark" />

      <S.GoBack onPress={() => navigation.goBack()}>
        <AntDesign name="left" size={25} color="black" />
      </S.GoBack>
      <ScrollView>
        <S.Image
          resizeMode="contain"
          source={{
            uri: product.image,
          }}
        />
        <S.WrappedInfos>
          <S.Price>R$ {product.price}</S.Price>
          <S.Title>{product.title}</S.Title>
          <S.WrappedRating>
            <S.Rate>{product.rating.count} reviews </S.Rate>
            <S.Rate>-</S.Rate>

            <S.Rate>{product.rating.rate}</S.Rate>
            <FontAwesome name="star" size={16} color="#FFCB0C" />
          </S.WrappedRating>
          <S.TitleDescription>Description</S.TitleDescription>
          <S.Description>{product.description}</S.Description>
          <S.WrappedButton>
            <Button label="Add to cart" onPress={handleAddProduct} />
          </S.WrappedButton>
        </S.WrappedInfos>
      </ScrollView>
      <Modal
        open={openModal}
        closeModal={() => setOpenModal(!openModal)}
        sucess={handleReAddProduct}
      />
    </S.Container>
  );
};
