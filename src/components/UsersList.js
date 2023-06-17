import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store";
import Skelton from "./Skelton";

function UsersList(props) {
  const dispatch = useDispatch();

  const { isLoading, data, error } = useSelector((state) => {
    return state.users; //{data:[], isLoading: false, error: null}
  });

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (isLoading) {
    //show Skelton
    return <Skelton times={6} className="h-10 w-full" />;
  }

  if (error) {
    return <div>Error fetching data...</div>;
  }

  return <div>{data.length}</div>;
}

export default UsersList;
