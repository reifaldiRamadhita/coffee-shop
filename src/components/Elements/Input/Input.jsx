import { useContext } from "react";
import { CheckPrice } from "../../../context/checkPriceContext";

const Input = ({ type, id, name, value, classInput }) => {
  const { setAmount, setSize, setTemperature } = useContext(CheckPrice);

  const checkPrice = (value) => {
    if (value.match(/\d/)) {
      return setAmount(Number(value));
    }
    if (value === "large" || value === "medium" || value === "small") {
      return setSize(value);
    }
    if (value === "hot" || value === "cold") {
      return setTemperature(value);
    }
  };

  return (
    <input
      type={type}
      id={id}
      min="1"
      name={name}
      value={value}
      className={`${classInput} peer`}
      required
      onChange={(e) => checkPrice(e.target.value)}
    />
  );
};

export default Input;
