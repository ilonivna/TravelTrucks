import { fetchCamper } from "../../redux/campers/operations";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../../components/Loader/Loader";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {
  selectLoading,
  selectCamper,
  selectError,
} from "../../redux/campers/selectors";
import { useLayoutEffect } from "react";
import { useMemo } from "react";
import Gallery from "../../components/CamperDetails/Gallery/Gallery";
import ReviewLocation from "../../components/CamperDetails/ReviewLocation/ReviewLocation";
import NamePrice from "../../components/CamperDetails/NamePrice/NamePrice";
import Description from "../../components/CamperDetails/Description/Description";
import Features from "../../components/CamperDetails/Features/Features";

export default function CamperPage() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const camper = useSelector(selectCamper);
  useEffect(() => {
    dispatch(fetchCamper(id));
  }, [dispatch, id]);

  return (
    <>
      <></>
      {/* <Gallery /> */}
      {/* <ReviewLocation /> */}
      <NamePrice camper={camper} />
      <Description camper={camper} />
      <Features camper={camper} />
    </>
  );
}
