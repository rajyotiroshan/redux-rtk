import { GoTrashcan } from "react-icons/go";
import Button from "./Button";

import ExpandablePanel from "./ExpandablePanel";

import { useRemoveAlbumMutation } from "../store/index";

function AlbumListItem({ album }) {
  const [removeAlbum, results] = useRemoveAlbumMutation();

  const handleRemoveAlbum = () => {
    removeAlbum(album);
  };

  const header = (
    <>
      <Button
        className="mr-2"
        onClick={handleRemoveAlbum}
        loading={results.isLoading}
      >
        <GoTrashcan />
      </Button>
      {album.title}
    </>
  );
  return (
    <ExpandablePanel key={album.id} header={header}>
      List of photos
    </ExpandablePanel>
  );
}

export default AlbumListItem;
