import SearchLocation from "./search/SearchLocation";
import Styles from "./index.module.css";
import Current from "./current/current";
import { useSelector } from "react-redux";

import ChangeTypeTemp from "./settings/ChangeTempType";
import { background } from "../helpers/background/ChangeBackground";
import Forecast from "./forcast/Forecast.jsx";
import NoneData from "../helpers/Layout/none-data/nonedata.layout";

const WeatherComponents = () => {
  const currentReducer = useSelector((state) => state.CurrentWeatherReducer);

  return (
    <div
      className={Styles.main}
      style={{
        backgroundImage: `url("${background(currentReducer)}")`,
      }}
    >
      <ChangeTypeTemp />
      <SearchLocation />
      {currentReducer ? (
        <>
          <Current />
          <Forecast />
        </>
      ) : <NoneData />}
    </div>
  );
};

export default WeatherComponents;
