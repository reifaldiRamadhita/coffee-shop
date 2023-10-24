import Crousel from "../components/Fragments/Crousel";
import CustomerInfo from "../components/Fragments/CustomerInfo";
import banner from "../assets/img/banner.jpg";
import "aos/dist/aos.css";
import CardCoffeeList from "../components/Layouts/CardCoffeList";
import SocialMedia from "../components/Fragments/SocialMedia";

export default function Home({ onClickCoffee }) {
  return (
    <div className="relative flex min-h-screen w-full flex-wrap justify-center md:h-full md:justify-end">
      {/* left side */}
      <div className="static left-0 mb-12 flex w-full flex-col md:fixed md:top-20 md:w-1/2 lg:px-28">
        <CustomerInfo />

        {/* crousel & social media */}
        <div className="relative flex">
          <div className="absolute -left-20 top-[60%] flex w-fit flex-col gap-y-8 px-8">
            <SocialMedia.Facebook />
            <SocialMedia.Instagram />
            <SocialMedia.X />
            <SocialMedia.Whatsapp />
          </div>
          <Crousel />
        </div>

        {/* banner */}
        <div className="relative mx-auto hidden w-2/3 md:mt-10 md:flex md:justify-center lg:mt-12 lg:flex lg:justify-center">
          <img src={banner} alt="banner" />
        </div>
      </div>

      {/* right side */}
      <CardCoffeeList onClickCoffee={onClickCoffee} />
    </div>
  );
}
