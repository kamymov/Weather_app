import SearchLocation from "./Search/SearchLocation";
import Styles from "./index.module.css";
import Current from "./Current/Current";
import { useSelector } from "react-redux";

import ChangeTypeTemp from "./Settings/ChangeTempType";
import { background } from "../helpers/Background/changeBackground";
import Forecast from "./Forcast/Forecast.jsx";
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
