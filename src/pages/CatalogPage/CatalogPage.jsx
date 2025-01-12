import CampersList from "../../components/CampersList/CampersList";
import SideBar from "../../components/SideBar/SideBar";
import Loader from "../../components/Loader/Loader";
import {
  selectCampersList,
  selectError,
  selectFilters,
  selectPage,
  selectTotalPages,
  selectLoading,
} from "../../redux/campers/selectors";
import { fetchAllCampers } from "../../redux/campers/operations";
import { useSelector, useDispatch } from "react-redux";
import { setPage } from "../../redux/campers/slice";
import { useEffect } from "react";
import css from "./CatalogPage.module.css";
import iziToast from "izitoast";

export default function CatalogPage() {
  const dispatch = useDispatch();
  const campersList = useSelector(selectCampersList);
  const loading = useSelector(selectLoading);
  const filters = useSelector(selectFilters);
  const page = useSelector(selectPage);
  const totalPages = useSelector(selectTotalPages);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchAllCampers());
  }, [dispatch, filters, page]);

  function handleClick() {
    dispatch(setPage(page + 1));
  }
  return (
    <>
      {loading && <Loader />}

      {error &&
        iziToast.info({
          title: "Sorry!",
          message: "No campers were found! Reload, please.",
          color: "#D84343",
          position: "topRight",
        })}
      <div className={css.container}>
        <div>
          <SideBar />
        </div>

        <div>
          <CampersList
            campersList={campersList}
            page={page}
            totalPages={totalPages}
            handleClick={handleClick}
          />
        </div>
      </div>
    </>
  );
}
