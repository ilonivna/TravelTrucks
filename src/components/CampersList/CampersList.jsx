import { fetchAllCampers } from "../../redux/campers/operations";
import {
  selectCampersList,
  selectError,
  selectLoading,
} from "../../redux/campers/selectors";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../Loader/Loader";
import CamperDetails from "../CamperDetails/CamperDetails";

export default function CampersList() {
  const dispatch = useDispatch();
  const campersList = useSelector(selectCampersList);
  const loading = useSelector(selectLoading);

  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchAllCampers());
  }, [dispatch]);

  return (
    <div>
      {error && <p>Sorry, an error has occurred, please reload the page</p>}

      {loading ? (
        <Loader />
      ) : (
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
    </div>
  );
}
