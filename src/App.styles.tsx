import styled from 'styled-components/native';

export const SearchUserInput = styled.TextInput`
  width: 100%;
  height: 40px;
  border: 2px solid #eee;
`

export const Container = styled.KeyboardAvoidingView`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  /* width: 90%; */
  padding: 10%;
`;

export const ErrorMessage = styled.Text`
  color: red;
  font-size: 15px;
`
