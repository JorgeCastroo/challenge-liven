import styled from "styled-components/native";

export const Modal = styled.Modal``;

interface Props {
  active?: boolean;
}

export const Container = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
`;

export const ModalOutSide = styled.TouchableOpacity`
  flex: 1;
`;

export const Content = styled.View`
  width: 200px;
  height: 100%;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  gap: 20px;
  flex-direction: column;
  padding: 20px;
`;

export const Title = styled.Text`
  font-size: 18px;

  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;

export const Item = styled.TouchableOpacity`
  border-bottom-width: 1px;
`;

export const Label = styled.Text<Props>`
  font-size: 15px;
  font-weight: bold;
  padding: 10px;
  color: ${(Props) =>
    Props.active ? Props.theme.colors.white : Props.theme.colors.secondary};
`;
