import "./App.css";
import "./functions/LocationInput";
import { useEffect, useState } from "react";
import { Home } from "./pages/Home";
import { Result } from "./pages/Result";
import Cookies from "js-cookie";
function App() {
  const [requiredResult, changeRequired] = useState("");
  if (!Cookies.get("language")) {
    Cookies.set("language", "en");
  }
  return (
    <>
      <div className="static max-w-[1600px] main">
        {requiredResult != "" ? (
          <Result
            changeRequired={changeRequired}
            requiredResult={requiredResult}
          />
        ) : (
          <Home
            changeRequired={changeRequired}
            requiredResult={requiredResult}
          />
        )}
      </div>

      <center>
        <div class="absolute bottom-1 ms-auto me-auto lg:ms-[25%] lg:me-[25%]">
          <p className="text-base">
            <a
              href=""
              onClick={() => Cookies.set("language", "en")}
              className={Cookies.get("language") == "en" ? "underline" : "null"}
            >
              EN
            </a>{" "}
            /{" "}
            <a
              href=""
              onClick={() => Cookies.set("language", "simp")}
              className={
                Cookies.get("language") == "simp" ? "underline" : "null"
              }
            >
              简中
            </a>{" "}
            /{" "}
            <a
              href=""
              onClick={() => Cookies.set("language", "trad")}
              className={
                Cookies.get("language") == "trad" ? "underline" : "null"
              }
            >
              繁中
            </a>{" "}
            /{" "}
            <a
              href=""
              onClick={() => Cookies.set("language", "ms")}
              className={Cookies.get("language") == "ms" ? "underline" : "null"}
            >
              BM
            </a>
          </p>
          <p className="text-center text-xs">
            Made by{" "}
            <a href="https://github.com/weareblahs" className="underline">
              Tan (weareblahs)
            </a>
            . Most district data are manually compiled from Wikipedia and Google
            Maps, while some data is confirmed by myself. Data feedback can be
            submitted{" "}
            <a
              href="https://github.com/weareblahs/PenangDistrictFinder/issues/new"
              className="underline"
            >
              here
            </a>
            . Location data &copy; OpenStreetMap contributors.{" "}
            <a
              href="https://github.com/weareblahs/PenangDistrictFinder"
              className="underline"
            >
              Source code
            </a>
          </p>
        </div>
      </center>
    </>
  );
}

export default App;
