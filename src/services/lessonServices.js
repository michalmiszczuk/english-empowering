import http from "./httpServices";

const apiEndpoint = "/lessons";

function lessonUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getLessons() {
  return http.get(apiEndpoint);
}

export function saveLesson(lesson) {
  return http.post(apiEndpoint, lesson);
}

export function deleteLesson(movieId) {
  return http.delete(lessonUrl(movieId));
}

export function updateLessons(lessonId, lesson) {
  return http.put(lessonUrl(lessonId), lesson);
}
