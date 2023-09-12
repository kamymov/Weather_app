const TempTypeReducer = (state = 'C', action) => {
    switch (action.type) {
        case "FAHRENHEIT_TYPE":
            return state = 'F';
        case "CELSIUS_TYPE":
            return state = 'C';
        default:
            return state;
    }
}

export default TempTypeReducer;