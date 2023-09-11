const ForecastReducer = (state = null, action) => {
    switch (action.type) {
        case "FORECAST_WEATHER":
            state = action.payload
            return state;
        case "NONE_LOCATION_FORECAST":
            return state = null;
        default:
            return state;
    }
}

export default ForecastReducer;