export function toMonthDayString(date) {
  const dateString = date.toLocaleDateString("default", {month: "long", day: "numeric"});
  return dateString;
}

export function toWeekDayString(date) {
  const dateString = date.toLocaleDateString("default", {weekday: "long"});
  return dateString;
}
export function toHourString(date) {
  const dateString = date.toLocaleTimeString("default", {timeStyle: "short"});
  return dateString;
}
