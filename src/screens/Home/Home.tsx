import React, { useState } from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import Search from "../../components/Search/Search";
import UsersList from "../../components/UsersList/UsersList";
import { useSearchUsers } from "../../hooks/use-search-users";
import { User } from "../../services/users.service";
import { Container, NotDataMessage } from "./Home.styles";

const Home: React.FC = () => {
  const [search, setSearch] = useState<string>();
  const [users, setUsers] = useSearchUsers(search);

  /**
   * This handler is responsible
   * for set input text
   */
  async function handleInputChange({
    nativeEvent,
  }: NativeSyntheticEvent<TextInputChangeEventData>): Promise<void> {
    setSearch(nativeEvent.text);
  }

  /**
   * This handler is responsible
   * for remove deleted user from state
   * @param user
   */
  function handleDeleteUser(user: User): void {
    const usersWithoutDeleted = users.filter(
      ({ login }) => login !== user.login
    );

    setUsers(usersWithoutDeleted);
  }

  return (
    <Container>
      <Search onChange={handleInputChange} />
      {!users.length ? (
        <NotDataMessage>Nenhum usuário a ser exibido</NotDataMessage>
      ) : (
        <UsersList users={users} onDelete={handleDeleteUser} />
      )}
    </Container>
  );
};

export default Home;
