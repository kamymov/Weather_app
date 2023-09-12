// backgrounds images
import RainyBackground from "../../assets/background/Rainy.jpg"
import SunnyBackground from '../../assets/background/Sunny.jpg';
import OvercastBackground from '../../assets/background/Overcast.jpg';
import SnowBackground from "../../assets/background/snow.jpeg"
import { CheckDayOrNight } from "../../helpers/Convert/date.convert";
import MistBackground from "../../assets/background/Mist.jpeg";


export const background = (currentReducer) => {
    if (currentReducer?.condition?.text.includes('cloud') ||currentReducer?.condition?.text.includes('Cloudy') ) {
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
            return CheckDayOrNight(currentReducer?.last_updated);
    }
}