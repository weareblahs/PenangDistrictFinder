import districts from "../jsonData/districts.json";

export const getDistrict = (result) => {
  return districts.filter((d) => d.locations.includes(result))[0]["name"];
};
