export function dateDiff(initial, final) {
  if (date == null || date == "") return "--";
  date_initial = new Date(initial);
  date_final = new Date(final);
  return Math.floor(
    (Date.UTC(
      date_final.getFullYear(),
      date_final.getMonth(),
      date_final.getDate()
    ) -
      Date.UTC(
        date_initial.getFullYear(),
        date_initial.getMonth(),
        date_initial.getDate()
      )) /
      (1000 * 60 * 60 * 24)
  );
}
