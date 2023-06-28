import { GoTrashcan } from "react-icons/go";
import Button from "./Button";

import ExpandablePanel from "./ExpandablePanel";

function AlbumListItem({ album }) {
  const header = (
    <div>
      <Button>
        <GoTrashcan />
      </Button>
      {album.title}
    </div>
  );
  return (
    <ExpandablePanel key={album.id} header={header}>
      List of photos
    </ExpandablePanel>
  );
}

export default AlbumListItem;
