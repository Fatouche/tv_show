import { StarFill, Star as StarEmpty, StarHalf } from "react-bootstrap-icons";

type Props = {
  rating: number;
};

export const FiveStarRating = ({ rating }: Props) => {
  const starList: React.ReactElement[] = [];
  const starFillCount = Math.floor(rating);
  const hasStarHalf = rating - starFillCount >= 0.5;
  const emptyStarCount = 5 - starFillCount - (hasStarHalf ? 1 : 0);

  for (let i = 1; i <= starFillCount; i++) {
    starList.push(<StarFill key={"star-fill" + i} />);
  }

  if (hasStarHalf) {
    starList.push(<StarHalf key={"star-half"} />);
  }

  for (let i = 1; i <= emptyStarCount; i++) {
    starList.push(<StarEmpty key={"star-empty" + i} />);
  }

  return <div>{starList}</div>;
};
