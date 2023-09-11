import SearchLocation from "./search/SearchLocation";
import Styles from "./index.module.css";
import Current from "./current/current";
import { useSelector } from "react-redux";

// backgrounds images

import RainyBackground from "../assets/background/Rainy.jpg"
import SunnyBackground from '../assets/background/Sunny.jpg';
import OvercastBackground from '../assets/background/Overcast.jpg';
import SnowBackground from "../assets/background/snow.jpeg"
import { CheckDayOrNight } from "../helpers/Convert/date.convert";
import MistBackground from "../assets/background/Mist.jpeg";
import Forecast from "./forcast/Forecast.jsx";
import ChangeTypeTemp from "./settings/ChangeTempType";


const WeatherComponents = () => {

    const currentReducer = useSelector((state) => state.CurrentWeatherReducer);

    const background = () => {
        if (currentReducer?.condition?.text.includes('cloud')) {
            return OvercastBackground;
        }
        if (currentReducer?.condition?.text.includes('rain')) {
            return RainyBackground;
        }
        if (currentReducer?.condition?.text.includes('snow')) {
            return SnowBackground;
        }
        switch (currentReducer?.condition?.text) {
            case 'Sunny':
                return SunnyBackground
            case 'Overcast':
                return OvercastBackground
            case 'Partly cloudy':
                return OvercastBackground
            case "Mist":
                return MistBackground;
            default:
                return CheckDayOrNight();
        }
    }

    return (
        <div
            className={Styles.main}
            style={{
                backgroundImage: `url("${background()}")`
            }}
        >
            <ChangeTypeTemp />
            <SearchLocation />
            <Current />
            <Forecast />
        </div>
    );
};

export default WeatherComponents;
