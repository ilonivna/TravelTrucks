import css from "./Description.module.css";

export default function Description({ camper }) {
  const { name, price, location, description, reviews, rating } = camper;
  return (
    <div className={css.descrCont}>
      <p className={css.descr}>{description}</p>
    </div>
  );
}
