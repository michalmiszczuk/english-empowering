export default function getYearMonthDay(date, inputHour, inputMinutes) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  const newLessonTime = new Date(year, month, day, inputHour, inputMinutes);
  return newLessonTime;
}
