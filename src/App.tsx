import React, { useEffect, useState } from "react";
import { AppLoading, registerRootComponent } from "expo";
import { useFonts, Nunito_400Regular } from "@expo-google-fonts/nunito";
import { NativeSyntheticEvent, TextInputChangeEventData } from "react-native";
import getUsers, { User, UsersResponse } from "./services/users.service";
import UsersList from "./components/UsersList/UsersList";

import {
  Container,
  SearchUserInput,
  ErrorMessage,
  NotDataMessage,
} from "./App.styles";
import Search from "./components/Search/Search";

export default function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState<string>();
  const [error, setError] = useState<string>();
  const [fontsLoaded] = useFonts({
    Nunito: Nunito_400Regular,
  });

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
      setError("");
    } catch (error) {
      setError(error?.message);
    }
  }

  useEffect(() => {
    if (search) {
      const debounceSearch = setTimeout(() => searchUsers(search), 400);

      return () => clearTimeout(debounceSearch);
    }

    setUsers([]);
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

  if (!fontsLoaded) {
    return <AppLoading />;
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
}

registerRootComponent(App);
