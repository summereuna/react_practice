//써드 파티 라이브러리도 import시 확장자명 없이 가져옴
import ReactDOM from "react-dom/client";

import "./index.css";

//같은 폴더에 있는 App.js파일을 가져옴
//import로 가져올 때 js파일은 항상 .js확장명 빼고 입력
import App from "./App";

//리액트돔 라이브러리의 createRoot메서드로 /public/index.html에 있는 id가 root인 요소를 선택하여 렌더링할 요소가 root div임을 알려주기
//root 변수에 저장
const root = ReactDOM.createRoot(document.getElementById("root"));

//루트 객체에서 render 메서드 호출하여 리액트에게 선택된 div에서 무엇이 렌더링 되어야 하는지 알려주기
root.render(<App />);
//이 App은 말하자면 컴포넌트임!
//App 컴포넌트는 root라는 id를 갖는 요소가 있는 곳에 렌더링되는 컴포넌트이다.

//index.js가 가장 먼저 실행되는 파일이다.
