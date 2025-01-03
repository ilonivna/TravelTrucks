import Button from "../Button/Button";
import CamperDetails from "../CamperDetails/CamperDetails";

import css from "./CamperListItem.module.css";

export default function CamperListItem({ camper }) {
  return (
    <div className={css.container}>
      <CamperDetails camper={camper} />
    </div>
  );
}
