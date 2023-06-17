import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, addUser } from "../store";
import Button from "./Button";
import Skelton from "./Skelton";

function UsersList(props) {
  const [isLoadingUser, setIsLoadingUser] = useState(false);
  const [loadingUserError, setLoadingUserError] = useState(null);

  const dispatch = useDispatch();

  const { data } = useSelector((state) => {
    return state.users; //{data:[], isLoading: false, error: null}
  });

  useEffect(() => {
    setIsLoadingUser(true);
    //dispatch returns a promise
    dispatch(fetchUsers())
      .unwrap() //gives brand new promise that follow general promise rule
      .then(() => {
        console.log("success");
        setIsLoadingUser(false);
        setLoadingUserError(false);
      })
      .catch(() => {
        console.log("failed");
        setLoadingUserError(true);
        setIsLoadingUser(false);
      });

    //BAD
    //setLoadingUserError(fasle) ;; wil vbe called immediately after dispatch
  }, [dispatch]);

  const handleUserAdd = () => {
    dispatch(addUser());
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
        <Button onClick={handleUserAdd}>+ Add User</Button>
      </div>
      {renderedUser}
    </div>
  );
}

export default UsersList;
