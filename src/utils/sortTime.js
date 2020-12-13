export default function sortTime(lessonsToSort) {
  lessonsToSort.sort((a, b) => {
    if (a.days === b.days)
      return parseInt(a.time) > parseInt(b.time) ? +1 : parseInt(a.time) < parseInt(b.time) ? -1 : 0;
    return a.days > b.days ? +1 : -1;
  });
}
