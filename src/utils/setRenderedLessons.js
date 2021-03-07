import checkDate from "./checkDate";

export default function setRenderedLessons(lessons) {
  let lessonsToRender = [];
  for (let lesson of lessons) {
    if (lesson.isReserved) {
      let lessonDate = new Date(lesson.date);
      let today = new Date();
      if (lessonDate < today) continue;
      let dayName = lessonDate.toLocaleDateString("default", {month: "long", day: "numeric"});
      let time = lessonDate.toLocaleTimeString("default", {timeStyle: "short"});
      lessonsToRender.push({_id: lesson._id, days: dayName, time: time});
    }
  }
  const sortedLessons = checkDate(lessonsToRender);
  return sortedLessons;
}
