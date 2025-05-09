import UserCard from "./UserCard";
import { users } from "./data/users";

const UserList = () => {
  return (
    <div className="gap-4 grid">
      {users.map((user) => (
        <UserCard key={user.id} {...user} />
      ))}
    </div>
  );
};

export default UserList;
