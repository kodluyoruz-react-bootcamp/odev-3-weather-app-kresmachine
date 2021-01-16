function convertToCelsius(fh) {
    return (fh - 32) * 5 / 9;
}

function getDayName(date) {
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var dayName = days[date.getDay()];
    return dayName;
}

export { convertToCelsius, getDayName } 