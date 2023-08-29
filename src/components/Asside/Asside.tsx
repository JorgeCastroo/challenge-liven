import React, { useState, useEffect } from "react";

import * as S from "./styles";
import { getCategories } from "@services/categories/getCategories";
import { FlatList } from "react-native";

type AssideProps = {
  open: boolean;
  closeModal: () => void;
  selectedFilter: (filter: string | undefined) => void;
  filter?: string;
};

export const Asside: React.FC<AssideProps> = ({
  open,
  filter,
  closeModal,
  selectedFilter,
}) => {
  const [data, setData] = useState<string[]>([]);

  const fetchProducts = async () => {
    try {
      const productsData = await getCategories();
      setData(productsData);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <S.Modal
      animationType="slide"
      transparent={true}
      visible={open}
      onRequestClose={closeModal}
    >
      <S.Container>
        <S.Content>
          <S.Title>Filter</S.Title>

          {data && (
            <FlatList
              key={"#"}
              keyExtractor={(item) => "#" + item}
              renderItem={(list) => (
                <S.Item
                  onPress={() => {
                    if (filter === list.item) {
                      selectedFilter(undefined);
                    } else {
                      selectedFilter(list.item);
                    }
                  }}
                >
                  <S.Label active={filter === list.item}>- {list.item}</S.Label>
                </S.Item>
              )}
              data={data}
            />
          )}
        </S.Content>
        <S.ModalOutSide onPress={closeModal} />
      </S.Container>
    </S.Modal>
  );
};
