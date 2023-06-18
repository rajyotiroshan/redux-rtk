import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store";
import Button from "./Button";
import Skelton from "./Skelton";

//custom Hook
//for disptaching thunk
//and maintaining loading and error state
function useThunk(thunk) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const dispatch = useDispatch();

  const runThunk = useCallback(() => {
    setIsLoading(true);

    dispatch(thunk())
      .unwrap()
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, [dispatch, thunk]);

  return [runThunk, isLoading, error];
}

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
