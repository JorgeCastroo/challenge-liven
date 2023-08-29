import React from "react";

import * as S from "./styles";

type ButtonProps = {
  label: string;
  onPress?: () => void;
  type?: "primary" | "secondary";
  width?: string;
};

export const Button: React.FC<ButtonProps> = ({
  label,
  width,

  type = "primary",
  onPress,
}) => {
  return (
    <S.Container onPress={onPress} type={type} width={width}>
      <S.Label type={type}>{label}</S.Label>
    </S.Container>
  );
};
