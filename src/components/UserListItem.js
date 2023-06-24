import { GoTrashcan } from "react-icons/go";
import Button from "./Button";
import { removeUser } from "../store";
import { useThunk } from "../hooks/use-thunk";
import ExpandablePanel from "./ExpandablePanel";
import AlbumsList from "./AlbumsList";
function UsersListItem({ user }) {
  const [doRemoveUser, isDeletingUser, removeUserError] = useThunk(removeUser);
  const handleClick = () => {
    doRemoveUser(user);
  };
  const header = (
    <>
      <Button loading={isDeletingUser} onClick={handleClick} className="mr-3">
        <GoTrashcan />
      </Button>
      {removeUserError && <div>Error Deleting </div>}
      {user.name}
    </>
  );
  return (
    <ExpandablePanel header={header}>
      <AlbumsList user={user} />
    </ExpandablePanel>
  );
}

export { UsersListItem };
