import { useState } from "react";
import "./App.css";
import { debounce } from "lodash";
function App() {
  const [isFirstBox, setIsFirstBox] = useState(false);
  const [isSecondBox, setIsSecondBox] = useState(false);
  const [isThirdBox, setIsThirdBox] = useState(false);
  const [isFourthBox, setIsFourthBox] = useState(false);

  const onClickHandler = () => {
    setIsFirstBox(!isFirstBox);
    setTimeout(() => {
      setIsFirstBox(false);
    }, 2000);
  };
  const debouncedClick1 = debounce(onClickHandler, 5000);

  const onClickHandlerBox2 = () => {
    setIsSecondBox(!isSecondBox);
    setTimeout(() => {
      setIsSecondBox(false);
    }, 2000);
  };
  const debouncedClick2 = debounce(onClickHandlerBox2, 5000);

  const onClickHandlerBox3 = () => {
    setIsThirdBox(!isThirdBox);
    setTimeout(() => {
      setIsThirdBox(false);
    }, 2000);
  };
  const debouncedClick3 = debounce(onClickHandlerBox3, 5000);

  const onClickHandlerBox4 = () => {
    setIsFourthBox(!isFourthBox);
    setTimeout(() => {
      setIsFourthBox(false);
    }, 2000);
  };
  const debouncedClick4 = debounce(onClickHandlerBox4, 5000);

  return (
    <div className="app_mainbox">
      <button
        className={"app_subbox " + (isFirstBox ? "expandin" : "")}
        onClick={() => {
          debouncedClick1();
          onClickHandler();
        }}
      ></button>
      <button
        className={"app_subbox " + (isSecondBox ? "expandin" : "")}
        onClick={() => {
          debouncedClick2();
          onClickHandlerBox2();
        }}
      ></button>{" "}
      <button
        className={"app_subbox " + (isThirdBox ? "expandin" : "")}
        onClick={() => {
          debouncedClick3();
          onClickHandlerBox3();
        }}
      ></button>{" "}
      <button
        className={"app_subbox " + (isFourthBox ? "expandin" : "")}
        onClick={() => {
          debouncedClick4();
          onClickHandlerBox4();
        }}
      ></button>
    </div>
  );
}

export default App;
