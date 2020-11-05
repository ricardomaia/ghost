export function dateSubDays(date, num_days) {
  var date = new Date(date);
  date.setDate(date.getDate() - num_days);
  return date;
}
