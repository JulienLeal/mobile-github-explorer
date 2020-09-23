import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  /* flex: 1; */
  height: auto;
  width: 100%;
  margin-bottom: 22px;
`;

export const Message = styled.Text`
  font-family: "Nunito";
  max-width: 210px;
  font-size: 25px;
  color: #fff;
`;

export const ImageBackground = styled.ImageBackground`
  width: 200px;
  height: 150px;
  position: absolute;
  right: 0;
  resizeMode: cover;
`;
