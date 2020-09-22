import React, { useEffect, useState } from "react";
import { registerRootComponent } from "expo";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import getUsers, { User, UsersResponse } from "./services/users.service";
import UsersList from "./components/UsersList/UsersList";

import { Container, SearchUserInput, ErrorMessage } from "./App.styles";

export default function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState<string>();
  const [error, setError] = useState<string>();

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
      setError(error?.message);
    }
  }


  useEffect(() => {
    if (search) {
      const debounceSearch = setTimeout(() => searchUsers(search), 400);

      return () => clearTimeout(debounceSearch);
    }
  }, [search]);

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
      <SearchUserInput onChange={handleInputChange} keyboardType="default" />
      {error ? (
        <ErrorMessage>{error}</ErrorMessage>
      ) : (
        <UsersList users={users} onDelete={handleDeleteUser} />
      )}
    </Container>
  );
}

registerRootComponent(App);
