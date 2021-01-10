export default async function tryCatch(handler) {
  try {
    await handler();
  } catch (ex) {
    return ex;
  }
}
