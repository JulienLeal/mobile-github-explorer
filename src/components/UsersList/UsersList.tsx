import React from "react";
import { User } from "../../services/users.service";
import UserCard from "../UserCard/UserCard";

import { List } from "./UsersList.styles";

interface UsersListProps {
  users: User[];
  onDelete(user: User): void;
}

const UsersList: React.FC<UsersListProps> = ({ users, onDelete }) => {
  return (
    <List>
      {users.map((user) => (
        <UserCard user={user} onDelete={onDelete} key={user.login} />
      ))}
    </List>
  );
};

export default React.memo(UsersList);
