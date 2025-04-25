import "./App.css";
import "./functions/LocationInput";
import { useEffect, useState } from "react";
import { Home } from "./pages/Home";
import { Result } from "./pages/Result";
function App() {
  const [requiredResult, changeRequired] = useState("");

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
        <div class="absolute bottom-4 ms-auto me-auto lg:ms-[25%] lg:me-[25%]">
          <p className="text-center">
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
            .{" "}
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
