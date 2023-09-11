import { combineReducers } from "redux";
import LocationReducer from './location.reducers';
import CurrentWeatherReducer from './current.reducer';
import loadingReducer from './loading.reducer';
import ForecastReducer from './forecast.reducer'

const allReducers = combineReducers({
    LocationReducer,
    CurrentWeatherReducer,
    loadingReducer,
    ForecastReducer
});

export default allReducers;
