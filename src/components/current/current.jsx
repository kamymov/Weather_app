/* eslint-disable no-unused-vars */
import { useSelector } from "react-redux";
import Styles from "./current.module.css";
import { ConvertDate } from "../../helpers/Convert/date.convert";
import { WeahterIcon } from "../../helpers/icon/weather.icon";
import { ChangeTextWeather } from "../../helpers/weather/weather-status";
import { ChangeTempType } from "../../helpers/weather/change-weather";

const Current = () => {
  const currentReducer = useSelector((state) => state.CurrentWeatherReducer);
  const TempTypeReducer = useSelector((state) => state.TempTypeReducer);

  const convertDate = () => {
    return ConvertDate(new Date());
  };

  const TempType = () => {
    return ChangeTempType(
      TempTypeReducer,
      currentReducer?.temp_f,
      currentReducer?.temp_c
    );
  };

  // this have been change

  return (
    <>
      <div className={Styles.main}>
        <div className={Styles.date_div}>
          <h3>{convertDate()}</h3>
        </div>
        <div className={Styles.temp_div}>
          <h3>{TempType()}</h3>
        </div>
        <div className={Styles.status_div}>
          <h3>
            {ChangeTextWeather(currentReducer?.condition?.text)}
            <i className={WeahterIcon(currentReducer?.condition?.text)}></i>
          </h3>
        </div>
      </div>
    </>
  );
};

export default Current;
