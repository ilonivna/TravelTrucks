import css from "./ReviewLocation.module.css";
import icons from "../../../assets/sprite.svg";
import { useSelector } from "react-redux";
import { selectCamper } from "../../../redux/campers/selectors";

export default function ReviewLocation({ camper }) {
  const { location, reviews, rating } = camper;

  return (
    <div className={css.reviewLocationContainer}>
      <p>
        <svg width="24" height="21">
          <use href={`${icons}#icon-rating`}></use>
        </svg>
        {rating} ({reviews.length} Reviews)
      </p>

      <p>
        <svg width="24" height="21" fill="#101828">
          <use href={`${icons}#icon-map`}></use>
        </svg>
        {location}
      </p>
    </div>
  );
}
