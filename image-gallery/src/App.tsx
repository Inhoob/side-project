import React from "react";
import ImageBox from "./components/ImageBox";
import "./App.css";
import { useCallback, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";

function App() {
  const inpRef = useRef<HTMLInputElement>(null);
  const [imageList, setImageList] = useState<string[]>([]); //string list라는 뜻
  const onDrop = useCallback((acceptedFiles: any) => {
    // Do something with the files
    console.log(acceptedFiles);
    if (acceptedFiles.length) {
      for (const file of acceptedFiles) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = (event) => {
          setImageList((prev) => [...prev, event.target?.result as string]);
        };
      }
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
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

        {imageList.map((el, idx) => (
          <ImageBox key={el + idx} src={el} />
        ))}
        <div
          className="plus-box"
          {...getRootProps()}
          //dropzone에 onclick 이벤트도 포함되어 있음.
          // onClick={() => {
          //   inpRef.current?.click();
          // }}
        >
          <input
            type="file"
            ref={inpRef}
            {...getInputProps()}
            //dropzone에 포함된 기능임
            // onChange={(event) => {
            //   if (event.currentTarget.files?.[0]) {
            //     const file = event.currentTarget.files?.[0];

            //     const reader = new FileReader();
            //     reader.readAsDataURL(file);
            //     reader.onloadend = (event) => {
            //       setImageList((prev) => [
            //         ...prev,
            //         event.target?.result as string,
            //       ]);
            //     };
            //   }
            // }}
          />
          +
        </div>
      </div>
    </div>
  );
}

export default App;
