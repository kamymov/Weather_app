export const ChangeTextWeather = (weather_text) => {
    if (weather_text) {
        if (weather_text.includes('cloud') || weather_text.includes("Cloudy")) {
            return 'ابری';
        }
        if (weather_text.includes('rain')) {
            return 'بارانی';
        }
        if (weather_text.includes('snow')) {
            return 'برفی';
        }
        switch (weather_text) {
            case 'Sunny':
                return 'آفتابی';
            case 'Overcast':
                return 'ابری';
            case "Mist":
                return 'غبار'
            case "Clear":
                return 'هوای صاف';
            default:
                return '';
        }
    }
}