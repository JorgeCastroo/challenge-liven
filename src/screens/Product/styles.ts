import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  gap: 20px;
  position: relative;
  margin-top: 35px;
`;

export const GoBack = styled.TouchableOpacity`
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 9999;
`;

export const Image = styled.Image`
  width: 100%;
  height: 370px;
  border-radius: 1px;
`;

export const WrappedInfos = styled.View`
  width: 100%;
  align-items: flex-start;
  padding: 20px;
  padding-right: 20px;

  gap: 10px;
`;

export const Title = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};
`;

export const Price = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const WrappedRating = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const Rate = styled.Text`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: bold;
`;

export const TitleDescription = styled.Text`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.white};
`;

export const Description = styled.Text`
  font-size: 16px;
  text-align: justify;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const WrappedButton = styled.View`
  width: 100%;

  margin-top: 20px;
`;
