import { Button } from "@headlessui/react";
import { getDistrict } from "../internalFunctions/getDistrict";

export const Result = ({ changeRequired, requiredResult }) => {
  return (
    <div className="block">
      <div>
        <h1 className="italic text-2xl text-center">
          {requiredResult} is located in
        </h1>
        <h1 className="text-5xl/15 text-center w-[80vw] mt-8">
          {getDistrict(requiredResult)}
        </h1>
      </div>

      <center>
        <div className="mt-8 ">
          <Button
            onClick={() => changeRequired("")}
            className="inline-flex me-4 mt-2 mb-2 items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700"
          >
            Search other districts
          </Button>
        </div>
      </center>
    </div>
  );
};
