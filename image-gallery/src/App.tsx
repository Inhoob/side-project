import React from "react";
import ImageBox from "./components/ImageBox";
import "./App.css";
import { useRef, useState } from "react";

function App() {
  const inpRef = useRef<HTMLInputElement>(null);
  const [imageList, setImageList] = useState<string[]>([]); //string list라는 뜻
  return (
    <div className="container">
      <div className={"gallery-box " + (imageList.length > 0 && "row")}>
        {imageList.length === 0 && ( //imageBox길이가 0일때 이미지가 없다고 출력하는 방식. 이런 방식으로 코드를 줄일 수 있다.
          <div className="text-center">
            이미지가 없습니다
            <br />
            이미지를 추가해주세요.
          </div>
        )}

        <input
          type="file"
          ref={inpRef}
          onChange={(event) => {
            if (event.currentTarget.files?.[0]) {
              const file = event.currentTarget.files?.[0];

              const reader = new FileReader();
              reader.readAsDataURL(file);
              reader.onloadend = (event) => {
                setImageList((prev) => [
                  ...prev,
                  event.target?.result as string,
                ]);
              };
            }
          }}
        />
        {imageList.map((el, idx) => (
          <ImageBox key={el + idx} src={el} />
        ))}
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
