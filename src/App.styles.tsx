import styled from "styled-components/native";

export const SearchUserInput = styled.TextInput`
  width: 100%;
  height: 40px;
  border: 2px solid #eee;
`;

export const Container = styled.KeyboardAvoidingView`
  display: flex;
  height: 100%;
  background: #171313;
  padding: 10%;
`;

export const ErrorMessage = styled.Text`
  color: red;
  font-size: 15px;
`;
