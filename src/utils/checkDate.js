const checkDate = lessons => {
  let currentMonthLessons = [];
  let NextMonthLessons = [];
  for (let lesson of lessons) {
    let currentDay = new Date().toLocaleDateString("default", {month: "long", day: "numeric"});
    let currentHour = new Date().getHours() + ":" + new Date().getMinutes();

    const date = lesson.days.split(" ");
    const currentDate = currentDay.split(" ");

    if (parseInt(currentDate[0]) + 1 === parseInt(date[0]) || parseInt(date[0]) === 1) {
      if (23 - parseInt(currentHour) + parseInt(lesson.time) < 24) lesson.isDisabled = true;
      currentMonthLessons.push(lesson);
      continue;
    }

    if (parseInt(currentDate[0]) === parseInt(date[0])) {
      lesson.isDisabled = true;
      currentMonthLessons.push(lesson);
    }
    if (parseInt(currentDate[0]) < parseInt(date[0]) && currentDate[1] === date[1]) {
      currentMonthLessons.push(lesson);
    }
    if (currentDate[1] !== date[1]) {
      NextMonthLessons.push(lesson);
    }
    if (parseInt(currentDate[0]) > parseInt(date[0]) && currentDate[1] === date[1]) {
      continue;
    }
  }

  currentMonthLessons.sort((a, b) => {
    if (a.days === b.days)
      return parseInt(a.time) > parseInt(b.time) ? +1 : parseInt(a.time) < parseInt(b.time) ? -1 : 0;
    return parseInt(a.days) > parseInt(b.days) ? +1 : -1;
  });

  NextMonthLessons.sort((a, b) => {
    if (a.days === b.days)
      return parseInt(a.time) > parseInt(b.time) ? +1 : parseInt(a.time) < parseInt(b.time) ? -1 : 0;
    return parseInt(a.days) > parseInt(b.days) ? +1 : -1;
  });

  return [...currentMonthLessons, ...NextMonthLessons];
};

export default checkDate;
