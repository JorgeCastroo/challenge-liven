import styled from "styled-components/native";

interface Props {
  type: "primary" | "secondary";
  width?: string;
}

export const Container = styled.TouchableOpacity<Props>`
  background-color: ${(Props) =>
    Props.type === "primary"
      ? Props.theme.colors.primary
      : Props.theme.colors.white};
  width: ${(Props) => (Props.width ? Props.width : "100%")};
  height: 55px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.Text<Props>`
  font-size: 18px;
  color: ${(Props) =>
    Props.type === "primary"
      ? Props.theme.colors.white
      : Props.theme.colors.primary};
`;
