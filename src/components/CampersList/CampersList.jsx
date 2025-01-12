import { useSelector } from "react-redux";
import CamperDetails from "../CamperDetails/CamperDetails";
import css from "./CampersList.module.css";
import { selectLoading } from "../../redux/campers/selectors";
import Loader from "../Loader/Loader.jsx";

export default function CampersList({
  campersList,
  page,
  totalPages,
  handleClick,
}) {
  const loading = useSelector(selectLoading);
  const isDisabled = totalPages <= page;

  return (
    <div>
      {loading && <Loader />}
      {campersList.length > 0 && (
        <ul>
          {campersList.map((camper) => {
            return (
              <li key={camper.id}>
                <CamperDetails camper={camper} />
              </li>
            );
          })}
        </ul>
      )}

      {campersList.length > 0 && (
        <button onClick={handleClick} className={css.btn} disabled={isDisabled}>
          Load more campers
        </button>
      )}
    </div>
  );
}
