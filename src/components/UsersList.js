import { useEffect } from "react";
import { useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store";
import Button from "./Button";
import Skelton from "./Skelton";
import { useThunk } from "../hooks/use-thunk";

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

  if (isLoadingUser) {
    //show Skelton
    return <Skelton times={6} className="h-10 w-full" />;
  }

  if (loadingUserError) {
    return <div>Error fetching data...</div>;
  }
  const renderedUser = data.map((user) => {
    return (
      <div key={user.id} className="mb-2 order rounded">
        <div className="flex p-2 justify-between items center cursor-pointer">
          {user.name}
        </div>
      </div>
    );
  });
  return (
    <div>
      <div className="flex flex-row justify-between m-3">
        <h1 className="m-2 text-xl">Users</h1>
        {isCreatingUser ? (
          "Creating User..."
        ) : (
          <Button onClick={handleUserAdd}>+ Add User</Button>
        )}
        {creatingUserError && "Error Creating user..."}
      </div>
      {renderedUser}
    </div>
  );
}

export default UsersList;
