import React from "react";

import * as S from "./styles";
import { Feather } from "@expo/vector-icons";
import { Button } from "@components/Button/Button";

type ModalProps = {
  open: boolean;
  closeModal: () => void;
  sucess: () => void;
};

export const Modal: React.FC<ModalProps> = ({ open, closeModal, sucess }) => {
  return (
    <S.Modal
      animationType="slide"
      transparent={true}
      visible={open}
      onRequestClose={closeModal}
    >
      <S.Container>
        <S.ModalOutSide onPress={closeModal} />
        <S.Content>
          <S.Icon>
            <Feather name="alert-triangle" size={70} color="black" />
          </S.Icon>
          <S.Title>The selected item is already in your cart</S.Title>
          <S.WrappedButton>
            <Button
              label="Re-add"
              type="secondary"
              width="40%"
              onPress={sucess}
            />
            <Button
              label="close"
              type="secondary"
              width="40%"
              onPress={closeModal}
            />
          </S.WrappedButton>
        </S.Content>
        <S.ModalOutSide onPress={closeModal} />
      </S.Container>
    </S.Modal>
  );
};
