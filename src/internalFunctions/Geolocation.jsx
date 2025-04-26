import { Button } from "@headlessui/react";
import axios from "axios";
import Cookies from "js-cookie";
import { useGeolocated } from "react-geolocated";
import { checkLocationByGeolocation } from "./checkLocation";
import { localization } from "./localization";
import { useState } from "react";

export const Geolocation = ({ changeRequired }) => {
  const [pendingText, setPendingText] = useState(
    localization(
      Cookies.get("language"),
      "Do note that this uses geolocation for finding current location"
    )
  );
  const { coords, isGeolocationAvailable, isGeolocationEnabled } =
    useGeolocated({
      positionOptions: {
        enableHighAccuracy: true,
      },
      userDecisionTimeout: 5000,
    });

  const check = () => {
    if (isGeolocationAvailable && isGeolocationEnabled) {
      setPendingText(localization(Cookies.get("language"), "Please wait"));
      axios
        .get(
          `https://nominatim.openstreetmap.org/reverse?lat=${coords.latitude}&lon=${coords.longitude}&format=json`,
          {
            headers: {
              "Accept-Language": "ms",
            },
          }
        )
        .then((data) => {
          console.log(data.data);
          const geo = checkLocationByGeolocation(data.data.display_name);
          if (geo == "") {
            localization(
              Cookies.get("language"),
              "It seems that you are outside Penang or in an invalid location. If the problem persists while you're in Penang, please try again."
            );
          } else {
            changeRequired(geo);
          }
        });
    } else {
      if (isGeolocationAvailable && !isGeolocationEnabled) {
        alert(
          localization(
            Cookies.get("language"),
            "Please enable or allow geolocation on your device to continue."
          )
        );
      }
    }
  };

  return (
    <center className="block lg:hidden">
      <div className="h-[25vh] flex items-center justify-center">
        <div className="block">
          <Button
            onClick={() => check()}
            className="ms-4 me-4 items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700"
          >
            {localization(
              Cookies.get("language"),
              "Search by current location"
            )}
          </Button>
          <div className="bloc text-center">
            <i>{pendingText}</i>
          </div>
        </div>
      </div>
    </center>
  );
};
