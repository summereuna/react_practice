import React, { useEffect, useState } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./store/auth-context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 로그인 버튼 클릭하지 않아도 즉 loginHandler가 트리거 되지 않아도, 로컬스토리지에 isLoggedIn의 값이 1인 경우에는 로그인 유지하기
  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);
  //디펜던시가 비어 있는 경우, 의존성이 없기 때문에 앱이 처음 시작되면 의존성이 변경된 것으로 간주되어 앱이 시작될 때 이펙트 코드는 딱 한 번만 실행됨

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways

    //브라우저 저장소(로컬스토리지/쿠키)에 정보 저장해서, 앱 시작할 때 마다 데이터 유지되었는지 확인
    //로그인 했으면 1, 로그인 안 했으면 0으로 식별
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    //로그아웃시 로컬스토리지에 isLoggedIn 없애기
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn: false }}>
      <MainHeader onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </AuthContext.Provider>
  );
}

export default App;
