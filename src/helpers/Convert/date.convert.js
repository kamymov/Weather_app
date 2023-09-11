import moment from "moment-jalaali";
import DayBackground from '../../assets/background/Day.jpeg';
import NightBackground from '../../assets/background/Night.jpeg';

export const ConvertDate = (date) => {
    const d = moment(date);
    const day = dayConvert(d.day());
    const month = monthConvert(d.jMonth());
    return `${day} ${d.jDate()} ${month}`;
}

const dayConvert = (day) => {
    switch (day) {
        case 1:
            return 'دوشنبه';
        case 2:
            return 'سه شنبه';
        case 3:
            return 'چهارشنبه';
        case 4:
            return 'پنج شنبه';
        case 5:
            return 'جمعه';
        case 6:
            return 'شنبه';
        case 7:
            return 'یک شنبه';
        default:
            return '';
    }
}

const monthConvert = (month) => {
    switch (month) {
        case 0:
            return 'فروردین'
        case 1:
            return 'اردیبهشت'
        case 2:
            return 'خرداد'
        case 3:
            return 'تیر'
        case 4:
            return 'مرداد'
        case 5:
            return 'شهریور'
        case 6:
            return 'مهر'
        case 7:
            return 'آبان'
        case 8:
            return 'آذر'
        case 9:
            return 'دی'
        case 10:
            return 'بهمن'
        case 11:
            return 'اسفند'
        default:
            return ''
    }
}

export const CheckDayOrNight = () => {
    const d = new Date()
    if (d.getHours() >= 18) {
        return NightBackground;
    }
    return DayBackground;

}
