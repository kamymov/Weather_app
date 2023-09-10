const LocationReducers = (state = '', action) => {
    switch(action.type){
        case "CHOOSE_LOCATION":
            // in here must be get location from action.payload and set it in state
            return state;
        default:
            return state;
    }
}

export default LocationReducers;