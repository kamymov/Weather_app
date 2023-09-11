import { useSelector } from "react-redux";
import Styles from "./forecast.module.css";
import { dayConvert } from "../../helpers/Convert/date.convert";
import { ChangeTextWeather } from "../../helpers/weather/weather-status";
import { WeahterIcon } from "../../helpers/icon/weather.icon";

const Forecast = () => {
  const ForecastReducer = useSelector((state) => state.ForecastReducer);

  const weatherStatus = (data) => {
    const weatherStatus = ChangeTextWeather(data.day.condition.text);
    return `${weatherStatus}`;
  };

  const dayData = (data) => {
    return dayConvert(new Date(data.date).getDay());
  };

  const maxTemp = (data) => {
    return `بالاترین دما : ${Math.round(data.day.maxtemp_c)}`;
  };

  const minTemp = (data) => {
    return `پایین ترین دما : ${Math.round(data.day.mintemp_c)}`;
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
