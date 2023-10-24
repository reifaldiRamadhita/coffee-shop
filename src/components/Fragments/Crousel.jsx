import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";
import { useContext } from "react";
import { DatasCoffee } from "../../context/datasCoffeeContext";
import List from "../Elements/List/List";
import { ImageCoffee } from "../../context/imageCoffeeContext";

export default function Crousel() {
  const { datasCoffee } = useContext(DatasCoffee);
  const { imgCoffee } = useContext(ImageCoffee);

  return (
    <Swiper
      grabCursor={true}
      effect={"creative"}
      creativeEffect={{
        prev: {
          shadow: true,
          translate: [0, 0, -400],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[EffectCreative, Autoplay]}
      speed={"1000"}
      loop={true}
      className="w-full scale-90 pt-16 md:scale-90 lg:scale-[70%] lg:pt-0"
    >
      {datasCoffee.map((coffee, i) => {
        return (
          <SwiperSlide key={coffee.id}>
            <div className="leftSide relative flex h-80 scale-95 justify-center rounded-md bg-slate-100 pt-16 dark:bg-darkSlate">
              <h3 className="absolute left-5 top-5 truncate font-poiret text-7xl font-bold text-slate-200 dark:text-slate-600">
                {coffee.name}
              </h3>
              <div className="z-10 flex">
                <div className="flex w-1/2 justify-end">
                  <img
                    src={imgCoffee[i]}
                    alt="coffee"
                    className="w-36 object-contain"
                  />
                </div>
                <div className="ms-4 w-1/2">
                  <h2 className="mb-5 font-poiret text-3xl font-bold text-darkSlate dark:text-white">
                    {coffee.name}
                  </h2>

                  <List
                    data={coffee.substance}
                    classname="border-slate-400 text-end dark:text-white"
                    styleList="border-b-2 border-slate-400 font-semibold font-poiret lg:w-36"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}
