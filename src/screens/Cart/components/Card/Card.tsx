import React from "react";

import * as S from "./styles";
import { AntDesign } from "@expo/vector-icons";
import theme from "@styles/theme";
import { useAppDispatch } from "@redux/hooks";
import { setLessItem, setMoreItem } from "@redux/reducer/cart/cart";
import { GetResponse } from "@services/products/getProducts";

type CardProps = {
  data: GetResponse;
};

export const Card: React.FC<CardProps> = ({ data }) => {
  const dispatch = useAppDispatch();

  return (
    <S.Container>
      <S.Image
        resizeMode="contain"
        source={{
          uri: data.image,
        }}
      />
      <S.WrappedInfos>
        <S.Text>{data.title}</S.Text>
        <S.WrappedPriceAndCount>
          <S.Text>R$ {data.price}</S.Text>
          <S.WrappedCount>
            <AntDesign
              name="minuscircleo"
              size={14}
              color={theme.colors.secondary}
              onPress={() => dispatch(setLessItem(data))}
            />

            <S.Count>{data.amount}</S.Count>
            <AntDesign
              name="pluscircleo"
              size={14}
              color={theme.colors.secondary}
              onPress={() => dispatch(setMoreItem(data))}
            />
          </S.WrappedCount>
        </S.WrappedPriceAndCount>
      </S.WrappedInfos>
    </S.Container>
  );
};
