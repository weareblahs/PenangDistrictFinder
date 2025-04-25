import districts from "../jsonData/districts.json";

export const checkLocation = (location) => {
  let locations = [];
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
