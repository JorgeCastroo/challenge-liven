import styled from "styled-components/native";

export const Modal = styled.Modal``;

export const Container = styled.View`
  flex: 1;
  align-items: center;
`;

export const ModalOutSide = styled.TouchableOpacity`
  width: 100%;
  flex: 2;
`;

export const Content = styled.View`
  width: 80%;
  position: relative;
  height: 250px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  padding: 20px;
`;

export const Icon = styled.View`
  display: flex;
  top: -60px;
  position: absolute;
  border-radius: 100px;
  width: 100px;
  height: 100px;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Title = styled.Text`
  font-size: 25px;
  margin-top: 20px;

  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;

export const WrappedButton = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
`;
