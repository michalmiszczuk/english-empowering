import http from "../services/httpServices";
import getYearMonthDay from "../utils/getYearMonthDay";
import {saveLesson, updateLessons} from "./lessonServices";

const apiEndpoint = "http://192.168.1.4:9000/api/users";

export function userUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getUsers() {
  return http.get(apiEndpoint);
}

export function getUser(userId) {
  return http.get(userUrl(userId));
}

export function updateUser(userId, user) {
  return http.put(userUrl(userId), user);
}

export function deleteUser(userId) {
  return http.delete(userUrl(userId));
}

export function saveUser(user) {
  return http.post(apiEndpoint, user);
}

export async function cancelLesson(user, lessons, item) {
  const newReserved = [...user.reservedLessons];
  const removedReserved = newReserved.filter(lesson => lesson._id !== item._id);
  await updateUser(user._id, {...user, reservedLessons: removedReserved});
  console.log(item);
  const lessonsWithoutReserved = lessons.filter(l => l._id !== item._id);
  const lessonToChange = lessons.filter(l => l._id === item._id);
  const lessonToAdd = lessonToChange[0];
  lessonToAdd.isReserved = false;
  lessonsWithoutReserved.push(lessonToAdd);
  await updateLessons(item._id, lessonToAdd);

  return [{...user, reservedLessons: removedReserved}, lessonsWithoutReserved];
}

export async function reserveLesson(lessons, lessonId, user) {
  const lessonToFind = lessons.filter(l => l._id === lessonId);
  const lessonObject = lessonToFind[0];
  lessonObject.isReserved = true;
  console.log(lessonObject);
  await updateLessons(lessonId, lessonObject);

  const prevUser = user;
  const newUserLessons = [...prevUser.reservedLessons];
  const allUserLessons = [...newUserLessons, lessonObject];
  newUserLessons.push(lessonId);
  await updateUser(user._id, {...user, reservedLessons: newUserLessons});
  return [lessonObject, allUserLessons];
}

export async function addLessonToUser(dayMonth, inputHour, inputMinutes, user) {
  const newDate = getYearMonthDay(dayMonth, inputHour, inputMinutes);
  const newDateObject = new Date(newDate);
  const newLessonToAdd = {date: newDateObject, isReserved: true, isDisabled: false};

  const {data: dbLesson} = await saveLesson(newLessonToAdd);

  const prevUser = user;
  prevUser.reservedLessons.push(dbLesson._id);
  await updateUser(user._id, prevUser);
}

export function addLesson(user, lesson) {}

export async function refreshUsers(setUsers, setUser) {
  const {data} = await getUsers();
  setUsers(data);
  setUser(data[0]);
}

export async function refreshUser(user, setUser) {
  if (!user) return;
  const {data} = await getUser(user._id);
  setUser(data);
}
