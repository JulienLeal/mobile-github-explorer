import React, { useState } from "react";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import Search from "../../components/Search/Search";
import UsersList from "../../components/UsersList/UsersList";
import { useDebounce } from "../../hooks/use-debounce";
import getUsers, { User, UsersResponse } from "../../services/users.service";
import { Container, NotDataMessage } from "./Home.styles";

const Home: React.FC = () => {
  const [search, setSearch] = useState<string>();
  const [users, setUsers] = useState<User[]>([]);

  useDebounce(() => {
    if (search) {
      searchUsers(search);
    }
  }, [search]);

  /**
   * This function is responsible
   * for call getUsers service
   * and set response on state
   *
   * @param text
   */
  async function searchUsers(text: string) {
    try {
      const usersResponse: UsersResponse = await getUsers(text);

      setUsers(usersResponse?.items);
    } catch (error) {
      console.error(error);
    }
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

  /**
   * This handler is responsible
   * for set input text
   */
  async function handleSearchInputChange({
    nativeEvent,
  }: NativeSyntheticEvent<TextInputChangeEventData>): Promise<void> {
    setSearch(nativeEvent.text);
  }

  return (
    <Container>
      <Search onChange={handleSearchInputChange} />
      {!users.length ? (
        <NotDataMessage>Nenhum usuário a ser exibido</NotDataMessage>
      ) : (
        <UsersList users={users} onDelete={handleDeleteUser} />
      )}
    </Container>
  );
};

export default Home;
