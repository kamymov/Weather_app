import { useState } from "react";
import Styles from "./SearchList.module.css";
import { useDispatch } from "react-redux";
import { Choose_location } from "../../Redux/action/Location.action";
import sendRequest from "../../api/request.api";
import { ApiKey, BaseUrl } from "../../configs/config";
import Swal from "sweetalert2";
import { Current_weather, None_Location } from "../../Redux/action/current.action";
import {
  endLoadingAction,
  startLoadingAction,
} from "../../Redux/action/Loading.action";
import { Forecast_weather, None_Location_Forecast } from "../../Redux/action/forecast.action";

const SearchLocation = () => {
  const [location, setLocation] = useState();
  const dispatch = useDispatch();

  const searchLocation = async () => {
    if (!location) {
      dispatch(None_Location())
      return dispatch(None_Location_Forecast());
    }
    dispatch(Choose_location(location));
    dispatch(startLoadingAction());
    try {
      const response = await sendRequest(
        `${BaseUrl}/v1/forecast.json?key=${ApiKey}&q=${location}&days=6`,
        "GET"
      );
      // current day weather
      response.data.forecast.forecastday.shift();
      console.log(response.data.forecast.forecastday);
      console.log(response.data.current);
      dispatch(Current_weather(response.data.current));
      // forecast days weather
      dispatch(Forecast_weather(response.data.forecast.forecastday));
    } catch (err) {
      Swal.fire("", err.response.data.error.message, "error");
    } finally {
      dispatch(endLoadingAction());
    }
  };

  const searchAndSuggestLocation = (event) => {
    setLocation(event.target.value);
  };

  return (
    <div className={Styles.main}>
      <input
        className={Styles.search_input}
        type="text"
        placeholder="نام شهر یا کشور"
        onChange={searchAndSuggestLocation}
        value={location}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            searchLocation();
          }
        }}
      />
    </div>
  );
};

export default SearchLocation;
