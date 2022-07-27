import React from "react";
import ImageBox from "./components/ImageBox";
import "./App.css";
import { useRef } from "react";

function App() {
  const inpRef = useRef<HTMLInputElement>(null);

  return (
    <div className="container">
      <div className="initial-box">
        <div className="text-center">
          이미지가 없습니다
          <br />
          이미지를 추가해주세요.
        </div>
        <input type="file" ref={inpRef} />
        <div
          className="plus-box"
          onClick={() => {
            inpRef.current?.click();
          }}
        >
          +
        </div>
      </div>
    </div>
  );
}

export default App;
