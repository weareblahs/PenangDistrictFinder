import districts from "../jsonData/districts.json";
import Cookies from "js-cookie";
import { localization } from "./localization";
export const checkLocation = (location) => {
  let locations = [];
  let lang = Cookies.get("language");
  districts.forEach((d) => {
    d.locations.forEach((e) => {
      locations.push(e);
    });
  });
  const locFilter = locations.filter((loc) =>
    loc.toLowerCase().startsWith(location)
  );
  return locFilter;
};

export const checkLocationByGeolocation = (searchString) => {
  let locations = [];
  districts.forEach((d) => {
    d.locations.forEach((e) => {
      locations.push(e);
    });
  });

  const foundLocationNames = locations.filter((d) =>
    searchString.includes(`${d}, `)
  );

  if (foundLocationNames.length == 0) {
    return "";
  } else {
    return foundLocationNames[0]; // usually the first string will help with the searching
  }
};
