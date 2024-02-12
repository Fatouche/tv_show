import { TV_show_type } from "../../types/tv-show";
import { FiveStarRating } from "../FiveStarRating/FiveStarRating";

type Props = {
  tvShow: TV_show_type;
};

export const TVShowDetail = ({ tvShow }: Props) => {
  const rating = tvShow.vote_average / 2;

  return (
    <div>
      <div className="detail_title">{tvShow.name}</div>
      <div className="detail_rating_container">
        <FiveStarRating rating={rating} />
        <div className="detail_rating">{rating.toFixed(2)}/5</div>
      </div>
      <div className="detail_overview">{tvShow.overview}</div>
    </div>
  );
};
