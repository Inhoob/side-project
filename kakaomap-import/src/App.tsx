import React, { useEffect, useRef } from "react";

import "./App.css";

//kakao를 바로 사용할 수 없다. typescript에서는 카카오가 있다고 알려줘야함.
declare global {
  interface Window {
    kakao: any;
  }
}
function App() {
  const mapRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?appkey=8ddefe020a79e0665ee5cb987238f5c7&autoload=false";
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        if (mapRef.current) {
          var options = {
            center: new window.kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
            level: 3, //지도의 레벨(확대, 축소 정도)
          };
          var map = new window.kakao.maps.Map(mapRef.current, options); //지도 생성 및 객체 리턴
        }
      });
    };
    return () => script.remove();
  }, []);
  return (
    <>
      <div ref={mapRef} style={{ width: 300, height: 300 }}></div>
    </>
  );
}

export default App;
