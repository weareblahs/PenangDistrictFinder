import { useEffect } from "react";
import { LocationInput } from "../functions/LocationInput";
import { localization } from "../internalFunctions/localization";

export const Home = ({ changeRequired, requiredResult }) => {
  return (
    <div className="mt-auto mb-auto ms-auto me-auto ">
      <LocationInput changeRequired={changeRequired} />
    </div>
  );
};
