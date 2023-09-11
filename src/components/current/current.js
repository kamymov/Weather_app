import { useSelector } from "react-redux";
import Styles from "./current.module.css";
import { ConvertDate } from "../../helpers/Convert/date.convert";

const Current = () => {

    const currentReducer = useSelector((state) => state.CurrentWeatherReducer);

    const ChangeTextWeather = () => {
        if (currentReducer?.condition?.text.includes('cloud')) {
            return 'ابری';
        }
        if (currentReducer?.condition?.text.includes('rain')) {
            return 'بارانی';
        }
        if (currentReducer?.condition?.text.includes('snow')) {
            return 'برفی';
        }
        switch (currentReducer?.condition?.text) {
            case 'Sunny':
                return 'آفتابی';
            case 'Overcast':
                return 'ابری';
            default:
                return '';
        }
    }

    const convertDate = () => {
        return ConvertDate(new Date());
    }


    return <>

        <div className={Styles.main}>
            <div className={Styles.date_div}>
                <h3>{convertDate()}</h3>
            </div>
            <div className={Styles.status_div}>
                <h1> {ChangeTextWeather()} </h1>
            </div>
        </div>

    </>


}

export default Current;