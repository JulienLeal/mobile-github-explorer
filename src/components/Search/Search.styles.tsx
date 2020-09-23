import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex: 1;
  max-height: 150px;
  width: 100%;
`;

export const Message = styled.Text`
  font-family: "Nunito";
  max-width: 210px;
  font-size: 25px;
  color: #fff;
`;

export const ImageBackground = styled.ImageBackground`
  width: 200px;
  height: 100%;
  position: absolute;
  right: 0;
  resizeMode: cover;
`;

export const SearchInput = styled.TextInput`
  width: 100%;
  height: 45px;
  background: #222;
  padding-left: 20px;
  border: 1px solid #262525;
  border-radius: 5px;
  font-family: "Nunito";
  margin-top: 32px;
  color: #888;
  font-size: 16px;
`;
