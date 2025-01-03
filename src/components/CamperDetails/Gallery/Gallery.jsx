import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import css from "./Gallery.module.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import icons from "../../../assets/sprite.svg";
import { selectCamper } from "../../../redux/campers/selectors";

export default function Gallery({ camper }) {
  const { gallery, name } = camper;
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop="true"
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: "auto",
          spaceBetween: 20,
        },
      }}
    >
      {gallery.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <img className={css.image} src={item.thumb} alt={name} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
