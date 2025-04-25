import { Button } from "@headlessui/react";
import { getDistrict } from "../internalFunctions/getDistrict";
import { localization } from "../internalFunctions/localization";
import Cookies from "js-cookie";
export const Result = ({ changeRequired, requiredResult }) => {
  return (
    <div className="h-[85vh] lg:h-[100vh] center-everything-all">
      <div className="block">
        <h1 className="italic text-2xl text-center">
          {Cookies.get("language") == "en" || Cookies.get("language") == "ms"
            ? requiredResult
            : localization(Cookies.get("language"), requiredResult)}
          {localization(Cookies.get("language"), " is located in")}
        </h1>
        <h1 className="text-5xl/15 text-center w-[80vw] mt-8">
          {Cookies.get("language") == "en" || Cookies.get("language") == "ms"
            ? getDistrict(requiredResult)
            : localization(
                Cookies.get("language"),
                getDistrict(requiredResult)
              )}
        </h1>
        <center>
          <Button
            onClick={() => changeRequired("")}
            className="inline-flex me-4 mt-8 mb-2 items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700"
          >
            {localization(Cookies.get("language"), "Search other districts")}
          </Button>
        </center>
      </div>
    </div>
  );
};
