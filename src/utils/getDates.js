const get14days = () => {
  const addDays = days => {
    let date = new Date();
    date.setDate(date.getDate() + days);
    return date;
  };

  let i = 0;
  let calendarDate = [];
  while (i < 14) {
    let newDay = addDays(i);
    calendarDate.push(newDay);
    i++;
  }
  return calendarDate;
};

export default get14days();
