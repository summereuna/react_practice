import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  //직접 사용 하지는 않지만 IDE 자동 완성 더 좋게 하기 위해 더미 함수 저장해 두기
  onLogout: () => {},
  onLogin: (email, password) => {},
});

export const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState();

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

  //반환하는 공급자 컴포넌트의 value로 값 넣기
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
        onLogin: loginHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

//이렇게 전체 인증 state를 이 별도의 공급자 컴포넌트에서 관리할 수 있음

//기본값 내보내기
export default AuthContext;
