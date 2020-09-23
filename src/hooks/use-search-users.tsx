import { useState } from "react";
import getUsers, { User, UsersResponse } from "../services/users.service";
import { useDebounce } from "./use-debounce";

export function useSearchUsers(
  search: string | undefined
): [User[], React.Dispatch<React.SetStateAction<User[]>>] {
  const [users, setUsers] = useState<User[]>([]);

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
   * This hook invoke callback
   * then 400 ms
   */
  useDebounce(() => {
    if (search) {
      searchUsers(search);
    }
  }, [search]);

  return [users, setUsers];
}
