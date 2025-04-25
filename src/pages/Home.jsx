import { useEffect } from "react";
import { LocationInput } from "../functions/LocationInput";

export const Home = ({ changeRequired, requiredResult }) => {
  return (
    <div className="mt-auto mb-auto ms-auto me-auto ">
      <LocationInput changeRequired={changeRequired} />
    </div>
  );
};
