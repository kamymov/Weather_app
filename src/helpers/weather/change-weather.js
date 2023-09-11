export const ChangeTempType = (tempType, temp_f, temp_c) => {
    if (tempType === "C") {
        return `${Math.round(temp_c)}  °C`;
    } else {
        return `${Math.round(temp_f)} °F`;
    }
};