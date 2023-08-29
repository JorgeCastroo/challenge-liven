import React, { useEffect, useState } from "react";
import { FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import * as S from "./styles";
import { Card } from "@components/Card/Card";
import theme from "@styles/theme";
import { GetResponse, getProducts } from "@services/products/getProducts";
import { ProductNavigationProp } from "@routes/models";
import { useAppSelector } from "@redux/hooks";
import { Asside } from "@components/Asside/Asside";

interface HomeProps {
  navigation: ProductNavigationProp;
}

export const Home: React.FC<HomeProps> = ({ navigation }) => {
  const [data, setData] = useState<GetResponse[]>([]);
  const [openAsside, setOpenAsside] = useState<boolean>(false);
  const [filter, setFilter] = useState<string | undefined>();

  const { products } = useAppSelector((state) => state.cart);

  const fetchProducts = async () => {
    try {
      const productsData = await getProducts({ filter });
      setData(productsData);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };
  useEffect(() => {
    fetchProducts();
  }, [filter]);

  return (
    <S.Container>
      <S.Header>
        <S.WrappedTouch>
          <AntDesign
            name="menuunfold"
            size={30}
            color={theme.colors.white}
            onPress={() => setOpenAsside(true)}
          />
        </S.WrappedTouch>
        <S.WrappedTouch>
          {!!products?.length && (
            <S.WrappedCountItens>
              <S.Count>{products?.length}</S.Count>
            </S.WrappedCountItens>
          )}
          <AntDesign
            name="shoppingcart"
            size={30}
            color={theme.colors.white}
            onPress={() => navigation.navigate("Cart")}
          />
        </S.WrappedTouch>
      </S.Header>

      {data && (
        <FlatList
          key={"#"}
          keyExtractor={(item) => "#" + item.id}
          renderItem={(list) => (
            <Card
              onPress={() =>
                navigation.navigate("Product", { product: list.item })
              }
              image={list.item.image}
              price={list.item.price}
              rate={list.item.rating.rate}
              title={list.item.title}
            />
          )}
          data={data}
          numColumns={2}
        />
      )}
      <Asside
        open={openAsside}
        filter={filter}
        closeModal={() => setOpenAsside(!openAsside)}
        selectedFilter={(filter) => setFilter(filter)}
      />
    </S.Container>
  );
};
