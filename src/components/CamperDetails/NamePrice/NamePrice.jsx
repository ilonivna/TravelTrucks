import { useDispatch, useSelector } from "react-redux";
import { setFavorite, deleteFavorite } from "../../../redux/campers/slice";
import {
  selectCamper,
  selectFavorites,
} from "../../../redux/campers/selectors";

import icons from "../../../assets/sprite.svg";

import css from "./NamePrice.module.css";

export default function NamePrice({ camper }) {
  const { name, price } = camper;

  const dispatch = useDispatch();

  const favorites = useSelector(selectFavorites);
  const isFavorite = favorites.includes(camper.id);

  const handleChange = (e) => {
    const isChecked = e.target.checked;
    if (isChecked) {
      dispatch(setFavorite(camper.id));
    } else {
      dispatch(deleteFavorite(camper.id));
    }
  };

  return (
    <div className={css.namePriceContainer}>
      <h4>{name}</h4>
      <div className={css.priceFavContainer}>
        <p className={css.price}>€{price}.00</p>
        <label className={css.label}>
          <input
            className={css.input}
            type="checkbox"
            onChange={handleChange}
            checked={isFavorite}
          />

          <svg width="24" height="21" className={css.iconSvg}>
            {isFavorite ? (
              <use className={css.icon} href={`${icons}#checked-heart`}></use>
            ) : (
              <use href={`${icons}#heart`}></use>
            )}
          </svg>
        </label>
      </div>
    </div>
  );
}
