import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  gap: 30px;
  padding: 20px;
  justify-content: space-between;
`;

export const Header = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  margin-top: 30px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
`;

export const WrappedNotFound = styled.View`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 100px;
`;

export const NotFound = styled.Text`
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  color: ${({ theme }) => theme.colors.white};
`;

export const WrappedDelivery = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Delivery = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
`;

export const DeliveryType = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const WrappedButton = styled.View`
  width: 100%;

  margin-top: 20px;
`;
