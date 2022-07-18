/**
 * @description Given a time in 12 hours, it converts the time into military 24hours time
 * @param {s} string
 * @return string
 */

function timeConversion(s) {
  const hourStr = s.substring(0, 2);
  const timeStr = s.substring(s.length - 2);
  const minutes = s.substring(3, 5);
  const seconds = s.substring(6, 8);
  if (timeStr === "PM") {
    if (Number(hourStr) > 11) {
      return `${hourStr}:${minutes}:${seconds}`;
    }
    return `${Number(hourStr) + 12}:${minutes}:${seconds}`;
  } else if (timeStr === "AM" && Number(hourStr) > 11) {
    return `00:${minutes}:${seconds}`;
  } else {
    return `${hourStr}:${minutes}:${seconds}`;
  }
}

console.log(timeConversion("07:05:45PM"));
console.log(timeConversion("07:15:45AM"));
console.log(timeConversion("12:01:00PM"));
console.log(timeConversion("12:01:00AM"));
console.log(timeConversion("04:59:59AM"));
