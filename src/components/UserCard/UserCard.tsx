import React from "react";
import { Alert, Linking } from "react-native";
import { User } from "../../services/users.service";
import {
  Container,
  UsernameText,
  ButtonsSection,
  DeleteButton,
  VisitButton,
} from "./UserCard.styles";

interface UserCardProps {
  user: User;
  onDelete(user: User): void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onDelete }) => {
  /**
   * This function is responsible
   * for open user profile
   */
  async function handleVisitPress(): Promise<void> {
    const isSupported = await Linking.canOpenURL(user.html_url);

    if (isSupported) {
      await Linking.openURL(user.html_url);
    } else {
      Alert.alert("Não é possível abrir o link.");
    }
  }

  return (
    <Container>
      <UsernameText>{user.login}</UsernameText>
      <ButtonsSection>
        <VisitButton title="Visitar perfil" onPress={handleVisitPress} />
        <DeleteButton title="Remover" onPress={() => onDelete(user)} />
      </ButtonsSection>
    </Container>
  );
};

export default UserCard;
