import { useFetchAlbumsQuery, useAddAlbumMutation } from "../store";
import Skelton from "./Skeleton";
import Expandable from "./ExpandablePanel";
import Button from "./Button";
import ExpandablePanel from "./ExpandablePanel";

function AlbumsList({ user }) {
  const { data, error, isLoading } = useFetchAlbumsQuery(user);
  //useFetchAlbumsQuery(user);
  //array destructuring not obj destruc
  const [addAlbum, results] = useAddAlbumMutation(); //no user arg

  const handleAlbum = () => {
    addAlbum(user);
  };

  let content;
  if (isLoading) {
    content = <Skelton times={3} />;
  } else if (error) {
    content = <div> Error loading albums.</div>;
  } else {
    content = data.map((album) => {
      const header = <div>{album.title}</div>;
      return (
        <ExpandablePanel key={album.id} header={header}>
          List of photos
        </ExpandablePanel>
      );
    });
  }

  return (
    <div>
      <div>
        Album for {user.name}
        <Button onClick={handleAlbum}>+ Album</Button>
      </div>
      <div>{content}</div>
    </div>
  );
}

export default AlbumsList;
