import imgEspresso from "../assets/img/espresso.png";
import imgDopio from "../assets/img/doppio.png";
import imgAmericano from "../assets/img/americano.png";
import imgMacchiato from "../assets/img/machiato.png";
import imgLatteWithCream from "../assets/img/latte with cream.png";
import imgCappuccino from "../assets/img/cappuccino.png";
import imgLatte from "../assets/img/latte.png";
import imgFrappe from "../assets/img/frappe.png";
import imgIrishCoffee from "../assets/img/irish coffee.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-creative";

export default function Crousel() {
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
      <SwiperSlide>
        <div className="leftSide relative flex h-80 scale-95 justify-center rounded-md bg-slate-100 pt-16 dark:bg-darkSlate">
          <h3 className="absolute left-5 top-5 truncate font-poiret text-7xl font-bold text-slate-200 dark:text-slate-600">
            Espresso
          </h3>
          <div className="z-10 flex">
            <div className="flex w-1/2 justify-end">
              <img
                src={imgEspresso}
                alt="coffee"
                className="w-36 object-contain"
              />
            </div>
            <div className="ms-4 w-1/2">
              <h2 className="mb-5 font-poiret text-3xl font-bold text-darkSlate dark:text-white">
                Espresso
              </h2>

              <p className="mb-2 w-32 border-b-2 font-poiret font-semibold text-slate-800 dark:text-slate-300">
                Solo
              </p>
              <p className="mb-2 w-32 border-b-2 font-poiret font-semibold text-slate-800 dark:text-slate-300">
                Doppio
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="leftSide relative flex h-80 scale-95 justify-center rounded-md bg-slate-100 pt-16 dark:bg-darkSlate">
          <h3 className="absolute left-5 top-5 truncate font-poiret text-7xl font-bold text-slate-200 dark:text-slate-600">
            Doppio
          </h3>
          <div className="z-10 flex">
            <div className="flex w-1/2 justify-end">
              <img
                src={imgDopio}
                alt="coffee"
                className="w-36 object-contain"
              />
            </div>
            <div className="ms-4 w-1/2">
              <h2 className="mb-5 font-poiret text-3xl font-bold text-darkSlate dark:text-white">
                Doppio
              </h2>

              <p className="mb-2 w-32 border-b-2 font-poiret font-semibold text-slate-800 dark:text-slate-300">
                Foam
              </p>
              <p className="mb-2 w-32 border-b-2 font-poiret font-semibold text-slate-800 dark:text-slate-300">
                Espresso
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="leftSide relative flex h-80 scale-95 justify-center rounded-md bg-slate-100 pt-16 dark:bg-darkSlate">
          <h3 className="absolute left-5 top-5 truncate font-poiret text-7xl font-bold text-slate-200 dark:text-slate-600">
            Americano
          </h3>
          <div className="z-10 flex">
            <div className="flex w-1/2 justify-end">
              <img
                src={imgAmericano}
                alt="coffee"
                className="w-36 object-contain"
              />
            </div>
            <div className="ms-4 w-1/2">
              <h2 className="mb-5 font-poiret text-3xl font-bold text-darkSlate dark:text-white">
                Americano
              </h2>

              <p className="mb-2 w-32 border-b-2 font-poiret font-semibold text-slate-800 dark:text-slate-300">
                Water
              </p>
              <p className="mb-2 w-32 border-b-2 font-poiret font-semibold text-slate-800 dark:text-slate-300">
                Espresso
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="leftSide relative flex h-80 scale-95 justify-center rounded-md bg-slate-100 pt-16 dark:bg-darkSlate">
          <h3 className="absolute left-5 top-5 truncate font-poiret text-7xl font-bold text-slate-200 dark:text-slate-600">
            Macchiato
          </h3>
          <div className="z-10 flex">
            <div className="flex w-1/2 justify-end">
              <img
                src={imgMacchiato}
                alt="coffee"
                className="w-36 object-contain"
              />
            </div>
            <div className="ms-4 w-1/2">
              <h2 className="mb-5 font-poiret text-3xl font-bold text-darkSlate dark:text-white">
                Macchiato
              </h2>

              <p className="mb-2 w-32 border-b-2 font-poiret font-semibold text-slate-800 dark:text-slate-300">
                Milk Foam
              </p>
              <p className="mb-2 w-32 border-b-2 font-poiret font-semibold text-slate-800 dark:text-slate-300">
                Espresso
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="leftSide relative flex h-80 scale-95 justify-center rounded-md bg-slate-100 pt-16 dark:bg-darkSlate">
          <h3 className="absolute left-5 top-5 truncate font-poiret text-7xl font-bold text-slate-200 dark:text-slate-600">
            Latte with Cream
          </h3>
          <div className="z-10 flex">
            <div className="flex w-1/2 justify-end">
              <img
                src={imgLatteWithCream}
                alt="coffee"
                className="w-36 object-contain"
              />
            </div>
            <div className="ms-4 w-1/2">
              <h2 className="mb-5 font-poiret text-3xl font-bold text-darkSlate dark:text-white">
                Latte with Cream
              </h2>

              <p className="mb-2 w-32 border-b-2 font-poiret font-semibold text-slate-800 dark:text-slate-300">
                Ice Cream
              </p>
              <p className="mb-2 w-32 border-b-2 font-poiret font-semibold text-slate-800 dark:text-slate-300">
                Milk Foam
              </p>
              <p className="mb-2 w-32 border-b-2 font-poiret font-semibold text-slate-800 dark:text-slate-300">
                Steamed Milk
              </p>
              <p className="mb-2 w-32 border-b-2 font-poiret font-semibold text-slate-800 dark:text-slate-300">
                Espresso
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="leftSide relative flex h-80 scale-95 justify-center rounded-md bg-slate-100 pt-16 dark:bg-darkSlate">
          <h3 className="absolute left-5 top-5 truncate font-poiret text-7xl font-bold text-slate-200 dark:text-slate-600">
            Cappuccino
          </h3>
          <div className="z-10 flex">
            <div className="flex w-1/2 justify-end">
              <img
                src={imgCappuccino}
                alt="coffee"
                className="w-32 object-contain"
              />
            </div>
            <div className="ms-4 w-1/2">
              <h2 className="mb-5 font-poiret text-3xl font-bold text-darkSlate dark:text-white">
                Cappuccino
              </h2>

              <p className="mb-2 w-32 border-b-2 font-poiret font-semibold text-slate-800 dark:text-slate-300">
                Foam
              </p>
              <p className="mb-2 w-32 border-b-2 font-poiret font-semibold text-slate-800 dark:text-slate-300">
                Milk
              </p>
              <p className="mb-2 w-32 border-b-2 font-poiret font-semibold text-slate-800 dark:text-slate-300">
                Espresso
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="leftSide relative flex h-80 scale-95 justify-center rounded-md bg-slate-100 pt-16 dark:bg-darkSlate">
          <h3 className="absolute left-5 top-5 truncate font-poiret text-7xl font-bold text-slate-200 dark:text-slate-600">
            Latte
          </h3>
          <div className="z-10 flex">
            <div className="flex w-1/2 justify-end">
              <img
                src={imgLatte}
                alt="coffee"
                className="w-32 object-contain"
              />
            </div>
            <div className="ms-4 w-1/2">
              <h2 className="mb-5 font-poiret text-3xl font-bold text-darkSlate dark:text-white">
                Latte
              </h2>

              <p className="mb-2 w-32 border-b-2 font-poiret font-semibold text-slate-800 dark:text-slate-300">
                Milk Foam
              </p>
              <p className="mb-2 w-32 border-b-2 font-poiret font-semibold text-slate-800 dark:text-slate-300">
                Steamed Milk
              </p>
              <p className="mb-2 w-32 border-b-2 font-poiret font-semibold text-slate-800 dark:text-slate-300">
                Espresso
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="leftSide relative flex h-80 scale-95 justify-center rounded-md bg-slate-100 pt-16 dark:bg-darkSlate">
          <h3 className="absolute left-5 top-5 truncate font-poiret text-7xl font-bold text-slate-200 dark:text-slate-600">
            Frappe
          </h3>
          <div className="z-10 flex">
            <div className="flex w-1/2 justify-end">
              <img
                src={imgFrappe}
                alt="coffee"
                className="w-32 object-contain"
              />
            </div>
            <div className="ms-4 w-1/2">
              <h2 className="mb-5 font-poiret text-3xl font-bold text-darkSlate dark:text-white">
                Frappe
              </h2>

              <p className="mb-2 w-32 border-b-2 font-poiret font-semibold text-slate-800 dark:text-slate-300">
                Steamed Milk
              </p>
              <p className="mb-2 w-32 border-b-2 font-poiret font-semibold text-slate-800 dark:text-slate-300">
                Ice Cream
              </p>
              <p className="mb-2 w-32 border-b-2 font-poiret font-semibold text-slate-800 dark:text-slate-300">
                Espresso
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="leftSide relative flex h-80 scale-95 justify-center rounded-md bg-slate-100 pt-16 dark:bg-darkSlate">
          <h3 className="absolute left-5 top-5 truncate font-poiret text-7xl font-bold text-slate-200 dark:text-slate-600">
            Irish Coffee
          </h3>
          <div className="z-10 flex">
            <div className="flex w-1/2 justify-end">
              <img
                src={imgIrishCoffee}
                alt="coffee"
                className="w-32 object-contain"
              />
            </div>
            <div className="ms-4 w-1/2">
              <h2 className="mb-5 font-poiret text-3xl font-bold text-darkSlate dark:text-white">
                Irish Coffee
              </h2>

              <p className="mb-2 w-32 border-b-2 font-poiret font-semibold text-slate-800 dark:text-slate-300">
                Whipped Cream
              </p>
              <p className="mb-2 w-32 border-b-2 font-poiret font-semibold text-slate-800 dark:text-slate-300">
                Whiskey
              </p>
              <p className="mb-2 w-32 border-b-2 font-poiret font-semibold text-slate-800 dark:text-slate-300">
                Espresso
              </p>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
