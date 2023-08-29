import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  width: 45%;
  display: flex;
  gap: 5px;
  margin-top: 20px;
  margin-right: 20px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 170px;
  border-radius: 10px;
`;

export const WrappedPriceAndRate = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 18px;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;

export const WrappedRate = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

export const Rate = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: bold;
`;

export const Price = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: bold;
`;
