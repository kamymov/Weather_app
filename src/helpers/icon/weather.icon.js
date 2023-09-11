export const WeahterIcon = (weather_status) => {
    if (weather_status) {
        if (weather_status.includes('cloud') || weather_status.includes("Cloudy")) {
            return "fa fa-cloud text-white";
        }
        if (weather_status.includes('rain')) {
            return 'بارانی';
        }
        if (weather_status.includes('snow')) {
            return 'برفی';
        }
        switch (weather_status) {
            case 'Sunny':
                return "fa fa-sun-o text-warning";
            case 'Overcast':
                return "fa fa-cloud text-white";
            case "Mist":
                return "fa fa-cloud text-white"
            default:
                return '';
        }
    }
}