import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  background: white;
  border: 2px solid #eee;
  border-radius: 5px;
  flex: 1;
  height: 100px;
`;

export const UsernameText = styled.Text`
  font-size: 16px;
  color: #222;
`;

export const VisitButton = styled.Button`
  width: 100px;
  height: 80px;
  background: #fff;
  border: 2px solid #eee;
  color: #222;
`;

export const DeleteButton = styled(VisitButton)`
  background: #ff0000;
  margin-right: 10px;
  border: 2px solid transparent;
  color: #fff;
`;

export const ButtonsSection = styled.View`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
  margin-bottom: 10px;
`