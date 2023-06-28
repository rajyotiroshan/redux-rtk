import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Skelton from "./Skeleton";
import Expandable from "./ExpandablePanel";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";
import AlbumListItem from "./AlbumsListItem";

function AlbumsList({ user }) {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);
  //useFetchAlbumsQuery(user);
  //array destructuring not obj destruc
  const [addAlbum, results] = useAddAlbumMutation(); //no user arg
  //console.log(results);
  const handleAlbum = () => {
    addAlbum(user);
  };

  let content;
  if (isLoading) {
    content = <Skelton className="h-10 w-full" times={3} />;
  } else if (error) {
    content = <div> Error loading albums.</div>;
  } else {
    content = data.map((album) => {
      return <AlbumListItem key={album.id} album={album} />;
    });
  }

  return (
    <div>
      <div className="m-2 flex flex-row items-center justify-between">
        <h3 className="text-lg ont-bold">Album for {user.name}</h3>
        <Button onClick={handleAlbum} loading={results.isLoading}>
          + Album
        </Button>
      </div>
      <div>{content}</div>
    </div>
  );
}

export default AlbumsList;
