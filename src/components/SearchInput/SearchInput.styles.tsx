import styled from "styled-components/native";

export const Input = styled.TextInput`
  width: 100%;
  height: 100%;
  background: #222;
  padding-left: 40px;
  border: 1px solid #262525;
  border-radius: 5px;
  font-family: "Nunito";
  color: #eee;
  font-size: 16px;
`;

export const SearchIcon = styled.Image`
  position: absolute;
  left: 0;
  margin: 10px;
  elevation: 1;
`;

export const Container = styled.View`
  width: 100%;
  height: 45px;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 32px;
`