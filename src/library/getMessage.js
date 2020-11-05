import * as messages from "../messages.json";
import { getLanguage } from "./getLanguage";

const lang = getLanguage().replace("-", "_");

export function getMessage(label) {
  return messages[lang][label];
}
