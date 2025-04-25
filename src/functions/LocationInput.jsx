import { Button, Field, Input } from "@headlessui/react";
import { checkLocation } from "../internalFunctions/checkLocation";
import { useState } from "react";
export const LocationInput = ({ changeRequired }) => {
  const [locSuggestionData, addLocSuggestionData] = useState(checkLocation(""));
  return (
    <div className="">
      <div className="w-100 ms-auto me-auto">
        <h1 className="text-center text-2xl">
          Enter location name or select location below
        </h1>
        <Input
          onChange={(e) => addLocSuggestionData(checkLocation(e.target.value))}
          className={
            "mt-3 mb-3 block w-full rounded-lg border-none bg-white/5 px-3 py-1.5 text-3xl text-white focus:not-data-focus:outline-none data-focus:outline-2 data-focus:-outline-offset-2 data-focus:outline-white/25"
          }
        />
      </div>
      <div>
        {/* location results */}

        <div className="block text-center w-96 ms-auto me-auto overflow-auto h-[50vh]">
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
                    {d}
                  </Button>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};
