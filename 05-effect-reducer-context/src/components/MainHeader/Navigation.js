import React, { useContext } from "react";

import AuthContext from "../../store/auth-context";
import classes from "./Navigation.module.css";

const Navigation = () => {
  /*
  컨텍스트 사용, 활용, 리스닝 할 수 있게 하는 훅
  리액트 컴포넌트 함수에서 useContext()호출하여 사용

  컨텍스트에 사용하려는 컨텍스트를 가리키는 포인터 전달하면 컨텍스트 값을 얻을 수 있다.
  가져온 컨텍스트 값을 ctx로 저장한 후 JSX에 사용하면 된다.
  */
  const ctx = useContext(AuthContext);
  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Users</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href="/">Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
