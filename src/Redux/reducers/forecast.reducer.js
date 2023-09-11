const ForecastReducer = (state = null, action) => {
    switch (action.type) {
        case "FORECAST_WEATHER":
            state = action.payload
            return state;
        default:
            return state;
    }
}

export default ForecastReducer;