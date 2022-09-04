import Project from "../portfolioComponents/Project";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

const PortfolioList = ({ projects }) => {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        {projects.map((project, i) => {
          return (
            <SwiperSlide key={i}>
              {" "}
              <Project
                key={i}
                name={project.name}
                img={project.img}
                description={project.description}
                id={project.id}
                linkGithub={project.linkGithub}
                linkDemo={project.linkDemo}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default PortfolioList;
