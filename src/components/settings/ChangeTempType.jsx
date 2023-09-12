import { useDispatch, useSelector } from "react-redux";
import Styles from "./changeTempType.module.css";
import {
  CelsiusType,
  FahrenheitTempType,
} from "../../Redux/action/tempType.action";

const ChangeTypeTemp = () => {
  const dispatch = useDispatch();
  const TempTypeReducer = useSelector((state) => state.TempTypeReducer);

  const changeTempType = (event) => {
    const value = event.target.value;
    switch (value) {
      case "F":
        return dispatch(FahrenheitTempType());
      case "C":
        return dispatch(CelsiusType());
      default:
        return;
    }
  };

  return (
    <div className={Styles.settings_icon}>
      <i className="fa fa-cog"></i>
      <div className={Styles.dropdown}>
        <div className={Styles.types}>
          <label htmlFor="celsius">C</label>
          <input
            type="radio"
            id="celsius"
            name="temp"
            value="C"
            checked={TempTypeReducer === "C" ? true : false}
            onChange={changeTempType}
          />
        </div>
        <div className={Styles.types}>
          <label htmlFor="fahrenheit">F</label>
          <input
            type="radio"
            id="fahrenheit"
            name="temp"
            value="F"
            checked={TempTypeReducer === "F" ? true : false}
            onChange={changeTempType}
          />
        </div>
      </div>
    </div>
  );
};

export default ChangeTypeTemp;
