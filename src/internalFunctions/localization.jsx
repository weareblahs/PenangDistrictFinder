import strings from "../jsonData/localizationStrings.json";

export const localization = (lang, string) => {
  const langValue = lang == "en" ? "string" : lang;
  if (strings.filter((s) => s.string == string) != []) {
    return strings.filter((s) => s.string == string)[0][langValue];
  } else {
    return "";
  }
};
