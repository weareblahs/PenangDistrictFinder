import districts from "../jsonData/districts.json";

export const checkLocation = (location) => {
  let locations = [];
  let locationsLang = [];
  districts.forEach((d) => {
    d.locations.forEach((e) => {
      locations.push(e);
      locationsLang.push({
        string: e,
        "zh-Hans": "",
        "zh-Hant": "",
      });
    });
  });

  console.log(locationsLang);
  const locFilter = locations.filter((loc) =>
    loc.toLowerCase().startsWith(location)
  );
  return locFilter;
};
