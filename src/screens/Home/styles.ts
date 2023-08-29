import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  padding: 25px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
`;

export const WrappedTouch = styled.TouchableOpacity`
  position: relative;
`;

export const SectionProducts = styled.View`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const WrappedCountItens = styled.View`
  width: 20px;
  height: 20px;
  border-radius: 20px;
  background-color: red;
  position: absolute;
  z-index: 30;
  right: -5px;
  top: -10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Count = styled.Text`
  color: ${({ theme }) => theme.colors.white};
`;
