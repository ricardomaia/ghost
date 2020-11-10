import * as messages from "../messages.json";
import { getLanguage } from "./getLanguage";

const lang = getLanguage().replace("-", "_");

export function getMessage(label, args = {}) {
  try {
    let msg = messages[lang][label];

    msg = msg.replace(/%\w+%/g, function (tokens) {
      return args[tokens] || tokens;
    });

    return msg;
  } catch (error) {
    return `ERROR: Translation not avaliable for label: '${label}'. Check your messages.json file.`;
  }
}
