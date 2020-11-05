export function dateFormat(date) {
  if (date == null || date == "") return "--";
  var date = new Date(date);
  return date.toLocaleString("pt-BR");
}
