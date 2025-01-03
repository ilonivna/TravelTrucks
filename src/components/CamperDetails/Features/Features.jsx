// import { useSelector } from "react-redux";
// import { selectCamper, selectCampersList } from "../../redux/campers/selectors";
import icons from "../../../assets/sprite.svg";
import css from "./Features.module.css";

export default function Features({ camper }) {
  return (
    <ul className={css.list}>
      {camper?.transmission === "automatic" ? (
        <li className={css.iconContainer}>
          <svg height={20} width={20}>
            <use className={css.iconSvg} href={`${icons}#icon-automatic`}></use>
          </svg>
          <p>Automatic</p>
        </li>
      ) : (
        <></>
      )}
      {camper?.AC ? (
        <li className={css.iconContainer}>
          <svg height={20} width={20} className={css.iconSvg}>
            <use href={`${icons}#icon-ac`}></use>
          </svg>
          <p>AC</p>
        </li>
      ) : (
        <></>
      )}
      {camper?.engine === "petrol" ? (
        <li className={css.iconContainer}>
          <svg height={20} width={20} className={css.iconSvg}>
            <use href={`${icons}#icon-petrol`}></use>
          </svg>
          <p>Petrol</p>
        </li>
      ) : (
        <></>
      )}
      {camper?.engine === "diesel" ? (
        <li className={css.iconContainer}>
          <svg height={20} width={20} className={css.iconSvg}>
            <use href={`${icons}#icon-petrol`}></use>
          </svg>
          <p>Diesel</p>
        </li>
      ) : (
        <></>
      )}
      {camper?.TV ? (
        <li className={css.iconContainer}>
          <svg height={20} width={20} className={css.iconSvg}>
            <use href={`${icons}#icon-tv`}></use>
          </svg>
          <p>TV</p>
        </li>
      ) : (
        <></>
      )}
      {camper?.kitchen ? (
        <li className={css.iconContainer}>
          <svg height={20} width={20} className={css.iconSvg}>
            <use href={`${icons}#icon-kitchen`}></use>
          </svg>
          <p>Kitchen</p>
        </li>
      ) : (
        <></>
      )}
      {camper?.radio ? (
        <li className={css.iconContainer}>
          <svg height={20} width={20} className={css.iconSvg}>
            <use href={`${icons}#icon-radio`}></use>
          </svg>
          <p>Radio</p>
        </li>
      ) : (
        <></>
      )}
      {camper?.bathroom ? (
        <li className={css.iconContainer}>
          <svg height={20} width={20} className={css.iconSvg}>
            <use href={`${icons}#icon-bath`}></use>
          </svg>
          <p>Bathroom</p>
        </li>
      ) : (
        <></>
      )}
    </ul>
  );
}
