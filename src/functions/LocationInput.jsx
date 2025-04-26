import { Button, Field, Input } from "@headlessui/react";
import { checkLocation } from "../internalFunctions/checkLocation";
import { useState } from "react";
import Cookies from "js-cookie";
import { localization } from "../internalFunctions/localization";
export const LocationInput = ({ changeRequired }) => {
  const [locSuggestionData, addLocSuggestionData] = useState(checkLocation(""));
  return (
    <div className="h-[100%] lg:h-[100vh] center-everything-desktop">
      <div className="block">
        <div className="ms-auto me-auto mt-4">
          <h1 className="text-center text-2xl">
            {localization(
              Cookies.get("language"),
              "Enter location name or select location below"
            )}
          </h1>
          <Input
            onChange={(e) =>
              addLocSuggestionData(checkLocation(e.target.value))
            }
            placeholder={localization(
              Cookies.get("language"),
              "Please use Malay for searching location"
            )}
            className={
              "p-5 mt-3 mb-3 block w-[84%] text-center ms-auto me-auto rounded-lg border-none bg-white/5 px-3 py-1.5 text-3xl text-white focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25"
            }
          />
        </div>
        <div className="">
          {/* location results */}
          <div className="block text-center overflow-auto h-[35vh] w-[92vw] ms-[5%] me-[8%] lg:ms-0 lg:me-0 ">
            {locSuggestionData.length > 0
              ? locSuggestionData.map((d) => {
                  return (
                    <Button
                      onClick={(e) => {
                        changeRequired(e.target.value);
                      }}
                      className="inline-flex me-4 mt-2 mb-2 items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700"
                      value={d}
                    >
                      {Cookies.get("language") == "en" ||
                      Cookies.get("language") == "ms"
                        ? d
                        : localization(Cookies.get("language"), d)}
                    </Button>
                  );
                })
              : null}
          </div>
        </div>
      </div>
    </div>
  );
};
