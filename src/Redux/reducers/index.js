import { combineReducers } from "redux";
import CurrentWeatherReducer from './current.reducer';
import loadingReducer from './loading.reducer';
import ForecastReducer from './forecast.reducer';
import TempTypeReducer from './tempType.reducer';

const allReducers = combineReducers({
    CurrentWeatherReducer,
    loadingReducer,
    ForecastReducer,
    TempTypeReducer
});

export default allReducers;
