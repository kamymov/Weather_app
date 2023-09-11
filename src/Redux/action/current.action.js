export const Current_weather = (current_weather) => {
    return {
        type: 'CURRENT_WEATHER',
        payload: current_weather
    }
}
export const None_Location = () => {
    return {
        type: 'NONE_LOCATION',
    }
}