import { useSelector } from "react-redux";
import Styles from "./forecast.module.css";
import { dayConvert } from "../../helpers/Convert/date.convert";
import { ChangeTextWeather } from "../../helpers/Weather/weather-status";
import { WeahterIcon } from "../../helpers/Icon/weather.icon";
import { ChangeTempType } from "../../helpers/Weather/change-weather";

const Forecast = () => {
  const ForecastReducer = useSelector((state) => state.ForecastReducer);
  const TempTypeReducer = useSelector((state) => state.TempTypeReducer)

  const weatherStatus = (data) => {
    const weatherStatus = ChangeTextWeather(data.day.condition.text);
    return `${weatherStatus}`;
  };

  const dayData = (data) => {
    return dayConvert(new Date(data.date).getDay());
  };

  const maxTemp = (data) => {
    return `بالاترین دما : ${ChangeTempType(TempTypeReducer, data.day.maxtemp_f, data.day.maxtemp_c)}`;
  };

  const minTemp = (data) => {
    return `پایین ترین دما : ${ChangeTempType(TempTypeReducer, data.day.mintemp_f, data.day.mintemp_c)}`;
  };

  const Icon = (data) => {
    return WeahterIcon(data.day.condition.text);
  };

  return (
    <div className={Styles.forecast_main}>
      {ForecastReducer?.map((c, index) => {
        return (
          <div className={Styles.forecast_div} key={index}>
            <i className={Icon(c)}></i>

            <span className={Styles.forecast_title}>{dayData(c)}</span>
            <span className={Styles.forecast_title}>{maxTemp(c)}</span>
            <span className={Styles.forecast_title}>{minTemp(c)}</span>
            <span className={Styles.forecast_title}>{weatherStatus(c)}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Forecast;
