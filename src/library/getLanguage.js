export function getLanguage() {
  const userLang = navigator.language || navigator.userLanguage;
  const supportedLanguages = ["en", "pt-BR"];

  if (supportedLanguages.includes(userLang)) return userLang;
  return "en";
}
