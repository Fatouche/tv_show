import { TV_show_type } from "../../types/tv-show";
import { TVShowListItem } from "../TVShowListItem/TVShowListItem";

type Props = {
  tvShowList: Array<TV_show_type>;
  onClickItem: (tvShow: TV_show_type) => void;
};

export const TVShowList = ({ tvShowList, onClickItem }: Props) => {
  return (
    <>
      <div className="TV_show_List_title">Vous pourriez aimer aussi :</div>
      <div className="TV_show_List_list">
        {tvShowList.map((tvShow) => (
          <span className="TV_show_List_list_item" key={tvShow.id}>
            <TVShowListItem tvShow={tvShow} onclick={onClickItem} />
          </span>
        ))}
      </div>
    </>
  );
};
