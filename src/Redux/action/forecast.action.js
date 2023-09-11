export const Forecast_weather = (forecast_weather) => {
    return {
        type: 'FORECAST_WEATHER',
        payload: forecast_weather
    }
}

export const None_Location_Forecast = () => {
    return {
        type: 'NONE_LOCATION_FORECAST',
    }
}