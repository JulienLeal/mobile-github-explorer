import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  display: flex;
  background: red;
  border-radius: 7px;
  flex: 1;
  max-height: 80px;
  margin-bottom: 16px;
  border-radius: 7px;
  background: #222;
  align-items: center;
  flex-direction: row;
`;

export const UsernameText = styled.Text`
  font-size: 20px;
  font-weight: normal;
  line-height: 25px;
  text-align: left;
  color: #888;
  font-family: "Nunito";
`;

export const DeleteIcon = styled.Image`
  height: 15px;
  width: 15px;
`;

export const DeleteTouchable = styled.TouchableOpacity`
  height: 50px;
  width: 50px;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const VisitButton = styled.Button`
  width: 100px;
  height: 80px;
  background: #fff;
  border: 2px solid #eee;
  color: #222;
`;

export const ProfileImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: ${60 / 2}px;
  margin: 13px;
`;
