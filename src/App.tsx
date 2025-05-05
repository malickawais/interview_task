import { useState, useEffect } from "react";
import { debounce } from "lodash";
import "./App.css";

function App() {
  const [isFirstBox, setIsFirstBox] = useState(false);
  const [isSecondBox, setIsSecondBox] = useState(false);
  const [isThirdBox, setIsThirdBox] = useState(false);
  const [isFourthBox, setIsFourthBox] = useState(false);

  const [clickOrder, setClickOrder] = useState<number[]>([]);
  const [lastClickTime, setLastClickTime] = useState(Date.now());
  const [hasPlayedReverse, setHasPlayedReverse] = useState(false);

  const onClickHandler = () => {
    setIsFirstBox(true);
    setTimeout(() => setIsFirstBox(false), 2000);

    setClickOrder((prevOrder) => [...prevOrder, 1]);
    setLastClickTime(Date.now());
    setHasPlayedReverse(false);
  };

  const onClickHandlerBox2 = () => {
    setIsSecondBox(true);
    setTimeout(() => setIsSecondBox(false), 2000);

    setClickOrder((prevOrder) => [...prevOrder, 2]);
    setLastClickTime(Date.now());
    setHasPlayedReverse(false);
  };

  const onClickHandlerBox3 = () => {
    setIsThirdBox(true);
    setTimeout(() => setIsThirdBox(false), 2000);

    setClickOrder((prevOrder) => [...prevOrder, 3]);
    setLastClickTime(Date.now());
    setHasPlayedReverse(false);
  };

  const onClickHandlerBox4 = () => {
    setIsFourthBox(true);
    setTimeout(() => setIsFourthBox(false), 2000);

    setClickOrder((prevOrder) => [...prevOrder, 4]);
    setLastClickTime(Date.now());
    setHasPlayedReverse(false);
  };

  const handleInactivity = debounce(() => {
    if (!hasPlayedReverse && clickOrder.length > 0) {
      const reversed = [...clickOrder].reverse();
      reversed.forEach((box, idx) => {
        setTimeout(() => {
          if (box === 1) {
            setIsFirstBox(true);
            setTimeout(() => setIsFirstBox(false), 2000);
          } else if (box === 2) {
            setIsSecondBox(true);
            setTimeout(() => setIsSecondBox(false), 2000);
          } else if (box === 3) {
            setIsThirdBox(true);
            setTimeout(() => setIsThirdBox(false), 2000);
          } else if (box === 4) {
            setIsFourthBox(true);
            setTimeout(() => setIsFourthBox(false), 2000);
          }
        }, idx * 2000);
      });

      setHasPlayedReverse(true);
      setClickOrder([]);
    }
  }, 5000);

  useEffect(() => {
    handleInactivity();
    return () => handleInactivity.cancel();
  }, [clickOrder, handleInactivity]);

  return (
    <div className="app_mainbox">
      <button
        className={"app_subbox " + (isFirstBox ? "expandin" : "")}
        onClick={() => {
          onClickHandler();
        }}
      ></button>
      <button
        className={"app_subbox " + (isSecondBox ? "expandin" : "")}
        onClick={() => {
          onClickHandlerBox2();
        }}
      ></button>
      <button
        className={"app_subbox " + (isThirdBox ? "expandin" : "")}
        onClick={() => {
          onClickHandlerBox3();
        }}
      ></button>
      <button
        className={"app_subbox " + (isFourthBox ? "expandin" : "")}
        onClick={() => {
          onClickHandlerBox4();
        }}
      ></button>
    </div>
  );
}

export default App;
