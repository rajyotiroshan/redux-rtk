import { useFetchPhotosQuery } from "../store";

function PhotosList({ album }) {
    const {results,error, isLoading} = useFetchPhotosQuery(album);
  return <div>PhotosList</div>;
}

export default PhotosList;

