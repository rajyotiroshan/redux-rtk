import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import { removeUser } from "../store";
import { useThunk } from "../hooks/use-thunk";

function UsersListItem({ user }) {
  const [doRemoveUser, isDeletingUser, removeUserError] = useThunk(removeUser);
  const handleClick = () => {
    doRemoveUser(user);
  };

  return (
    <div className="mb-2 border rounded">
      <div className="flex p-2 justify-between items center cursor-pointer">
        <div className="flex flex-row items-center justify-between">
          <Button
            loading={isDeletingUser}
            onClick={handleClick}
            className="mr-3"
          >
            <GoTrashcan />
          </Button>
          {removeUserError && <div>Error Deleting </div>}
          {user.name}
        </div>
      </div>
    </div>
  );
}

export { UsersListItem };
