import React from "react";
import { FontAwesome } from "@expo/vector-icons";

import * as S from "./styles";

type CardsProps = {
  title: string;
  image: string;
  rate: number;
  price: number;
  onPress: () => void;
};
export const Card: React.FC<CardsProps> = ({
  image,
  price,
  rate,
  title,
  onPress,
}) => {
  return (
    <S.Container onPress={onPress}>
      <S.Image
        resizeMode="contain"
        source={{
          uri: image,
        }}
      />
      <S.Title numberOfLines={2}>{title}</S.Title>

      <S.WrappedPriceAndRate>
        <S.Price>R$ {price}</S.Price>

        <S.WrappedRate>
          <S.Rate>{rate}</S.Rate>
          <FontAwesome name="star" size={16} color="#FFCB0C" />
        </S.WrappedRate>
      </S.WrappedPriceAndRate>
    </S.Container>
  );
};
