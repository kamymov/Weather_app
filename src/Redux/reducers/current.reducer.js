const CurrentWeatherReducer = (state = null, action) => {
    switch (action.type) {
        case "CURRENT_WEATHER":
            state = action.payload;
            return state;
        default:
            return state;
    }
}

export default CurrentWeatherReducer;