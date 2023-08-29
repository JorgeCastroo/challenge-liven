import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  gap: 20px;
  flex-direction: row;
  width: 100%;
  margin-top: 20px;
`;

export const Image = styled.Image`
  width: 120px;
  height: 150px;
  border-radius: 10px;
`;

export const WrappedInfos = styled.View`
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
  width: 100%;
`;

export const Text = styled.Text`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.white};
  font-weight: bold;
`;

export const WrappedPriceAndCount = styled.View`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const WrappedCount = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 5px;
`;

export const Count = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.secondary};
`;
