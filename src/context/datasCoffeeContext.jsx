import { createContext, useState, useEffect } from "react";
import datas from "../assets/json/coffees.json";

const DatasCoffeeContext = createContext();

const DatasCoffeeProvider = ({ children }) => {
  const [datasCoffee, setDatasCofffee] = useState([]);

  useEffect(() => {
    setDatasCofffee(datas);
  }, []);

  return (
    <DatasCoffeeContext.Provider value={{ datasCoffee }}>
      {children}
    </DatasCoffeeContext.Provider>
  );
};

export const DatasCoffee = DatasCoffeeContext;
export default DatasCoffeeProvider;
