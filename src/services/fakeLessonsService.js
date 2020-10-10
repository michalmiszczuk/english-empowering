const lessons = [
  {days: "7 października", time: "16:00", isReserved: true, isDisabled: false, _id: "1"},
  {days: "10 października", time: "10:00", isReserved: true, isDisabled: false, _id: "2"},
  {days: "12 października", time: "16:10", isReserved: true, isDisabled: false, _id: "3"},
  {days: "4 października", time: "19:00", isReserved: true, isDisabled: false, _id: "4"},
  {days: "7 października", time: "12:00", isReserved: false, isDisabled: false, _id: "5"},
  {days: "8 października", time: "9:00", isReserved: true, isDisabled: false, _id: "6"},
  {days: "10 października", time: "22:00", isReserved: true, isDisabled: false, _id: "7"},
  {days: "17 października", time: "10:00", isReserved: true, isDisabled: false, _id: "8"},
];

function getLessons() {
  return lessons;
}

export default getLessons;
