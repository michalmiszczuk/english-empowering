import {toHourString} from "./toDateString";

export default function setCalenderLessons(classes, date) {
  let array = [];
  for (let lesson of classes) {
    let newDate = new Date(lesson.date);
    let currentDay = new Date(date);

    let newDateYear = newDate.getFullYear();
    let newDateMonth = newDate.getMonth();
    let newDateDay = newDate.getDate();

    let currentDateYear = currentDay.getFullYear();
    let currentDateMonth = currentDay.getMonth();
    let currentDateDay = currentDay.getDate();

    if (
      newDateYear === currentDateYear &&
      newDateMonth === currentDateMonth &&
      newDateDay === currentDateDay &&
      !lesson.isReserved
    ) {
      let time = toHourString(newDate);
      let dateToAdd = {...lesson, time: time};
      array.push(dateToAdd);
    }
  }
  if (array.length > 0) return array;
  else return [];
}
