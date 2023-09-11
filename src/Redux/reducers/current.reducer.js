const CurrentWeatherReducer = (state = null, action) => {
    switch (action.type) {
        case "CURRENT_WEATHER":
            state = action.payload;
            return state;
        case "NONE_LOCATION":
            return state = null;
        default:
            return state;
    }
}

export default CurrentWeatherReducer;