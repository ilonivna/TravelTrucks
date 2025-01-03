import { Link } from "react-router-dom";
import css from "./CamperDetails.module.css";
import icons from "../../assets/sprite.svg";
import Features from "./Features/Features";
import Description from "./Description/Description";
import NamePrice from "./NamePrice/NamePrice";
import ReviewLocation from "./ReviewLocation/ReviewLocation";
import Gallery from "./Gallery/Gallery";
import Button from "../Button/Button";

export default function CamperDetails({ camper }) {
  const { id } = camper;
  return (
    <div className={css.container}>
      <div className={css.containerGallery}>
        <Gallery camper={camper} />
      </div>
      <div className={css.containerDetails}>
        <NamePrice camper={camper} />
        <ReviewLocation camper={camper} />
        <Description camper={camper} />
        <Features camper={camper} />
        <div className={css.btn}>
          <Link to={`/campers/${id}`}>
            <Button>Show more</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
