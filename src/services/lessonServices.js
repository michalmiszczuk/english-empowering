import {getJwt} from "./authServices";
import http from "./httpServices";

const apiEndpoint = "/lessons";
const token = getJwt();

function lessonUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getLessons() {
  return http.get(apiEndpoint);
}

export function saveLesson(lesson) {
  return http.post(apiEndpoint, lesson);
}
// if (lesson._id) {
//   const body = {...lesson};
//   delete body._id;
//   return http.put(lessonUrl(lesson._id), body);
// }

export function deleteLesson(movieId) {
  return http.delete(lessonUrl(movieId));
}

export function updateLessons(lessonId, lesson) {
  return http.put(lessonUrl(lessonId), lesson);
}

// export async function refreshLessons(setLessons) {
//   const {data} = await getLessons();
//   return setLessons(data);
// }
