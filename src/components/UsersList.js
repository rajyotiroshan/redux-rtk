import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store";
import Button from "./Button";
import Skelton from "./Skelton";
import { useThunk } from "../hooks/use-thunk";
import { UsersListItem } from "./UserListItem";

function UsersList(props) {
  const [doFetchUsers, isLoadingUser, loadingUserError] = useThunk(fetchUsers);

  const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser);

  const { data } = useSelector((state) => {
    return state.users; //{data:[], isLoading: false, error: null}
  });

  useEffect(() => {
    doFetchUsers();

    //BAD
    //setLoadingUserError(fasle) ;; wil vbe called immediately after dispatch
  }, [doFetchUsers]);

  const handleUserAdd = () => {
    doCreateUser();
  };
  let content;

  if (isLoadingUser) {
    //show Skelton
    content = <Skelton times={6} className="h-10 w-full" />;
  } else if (loadingUserError) {
    content = <div>Error fetching data...</div>;
  } else {
    content = data.map((user) => {
      return <UsersListItem user={user} key={user.id} />;
      /*  */
    });
  }

  return (
    <div>
      <div className="flex flex-row justify-between m-3">
        <h1 className="m-2 text-xl">Users</h1>

        <Button onClick={handleUserAdd} loading={isCreatingUser}>
          + Add User
        </Button>

        {creatingUserError && "Error Creating user..."}
      </div>
      {content}
    </div>
  );
}

export default UsersList;
