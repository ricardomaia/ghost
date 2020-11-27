import { moment } from "moment";
import { getLanguage } from "./getLanguage";

/**
 *
 *
 * date = moment(epoch).format("DD/MM/YYYY");
 * time = moment(epoch).format("HH:mm:ss");
 * return date.toLocaleString("pt-BR");
 */
export function dateFormat(date) {
  if (date == null || date == "") return "--";
  var date = new Date(date);
  return date.toLocaleString(getLanguage());
}

export function getDate(date) {
  if (date == null || date == "") return "--";
  var date = new Date(date);
  return date.toLocaleDateString(getLanguage());
}

export function getTime(date) {
  if (date == null || date == "") return "--";
  var date = new Date(date);
  return date.toLocaleTimeString(getLanguage());
}
