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
