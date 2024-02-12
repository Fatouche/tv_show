import { SMALL_IMG_COVER_BASE_URL } from "../../config";
import { TV_show_type } from "../../types/tv-show";

type Props = {
  tvShow: TV_show_type;
  onclick: (tvShow: TV_show_type) => void;
};

export const TVShowListItem = ({ tvShow, onclick }: Props) => {
  return (
    <div
      className="TV_show_list_item_container"
      onClick={() => onclick(tvShow)}
    >
      <img
        className="TV_show_list_item_image"
        alt={tvShow.name}
        src={SMALL_IMG_COVER_BASE_URL + tvShow.backdrop_path}
      />
      <div className="TV_show_list_item_name">{tvShow.name}</div>
    </div>
  );
};
