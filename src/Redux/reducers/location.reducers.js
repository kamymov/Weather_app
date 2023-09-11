const LocationReducers = (state = null, action) => {
    switch(action.type){
        case "CHOOSE_LOCATION":
             state = action.payload;
             return state;
        default:
            return state;
    }
}

export default LocationReducers;