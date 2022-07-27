import React from "react";
import ImageBox from "./components/ImageBox";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="initial-box">
        <div className="text-center">
          이미지가 없습니다
          <br />
          이미지를 추가해주세요.
        </div>
        <input type="file" />
        <div className="plus-box mt">+</div>
      </div>
    </div>
  );
}

export default App;
