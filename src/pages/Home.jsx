import { useEffect } from "react";
import { LocationInput } from "../functions/LocationInput";
import { localization } from "../internalFunctions/localization";
import { Geolocation } from "../internalFunctions/Geolocation";

export const Home = ({ changeRequired, requiredResult }) => {
  return (
    <div className="mt-auto mb-auto ms-auto me-auto ">
      <Geolocation changeRequired={changeRequired} className="bg-white" />
      <LocationInput changeRequired={changeRequired} />
    </div>
  );
};
