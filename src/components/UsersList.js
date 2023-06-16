import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "../store";

function UsersList(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers);
  }, []);
  return <div>UserList</div>;
}

export default UsersList;
