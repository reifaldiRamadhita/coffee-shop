import CardCoffee from "../Fragments/CardCoffee";

const CardCoffeeList = ({ onClickCoffee }) => {
  return (
    <div className="mt-40 w-full md:mt-28 md:h-[1500px] md:w-1/2  lg:h-[2200px] lg:px-10">
      <h2 className="ps-8 text-4xl font-bold text-darkSlate dark:text-white md:mb-10">
        Coffee
      </h2>
      <div className="flex flex-wrap justify-evenly pb-32 md:pb-10">
        <CardCoffee onClickCoffee={onClickCoffee} />
      </div>
    </div>
  );
};

export default CardCoffeeList;
