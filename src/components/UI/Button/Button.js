/* import './Button.css'; */
import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  font: inherit;
  padding: 0.5rem 1.5rem;
  border: 1px solid #8b005d;
  color: white;
  background: #8b005d;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.26);
  cursor: pointer;

  /*for big devices*/
  @media (min-width: 768px) {
    width: auto;
  }

  &:focus {
    outline: none;
  }

  &:hover,
  &:active {
    background: #ac0e77;
    border-color: #ac0e77;
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.26);
  }
`;

/* const Button = props => {
  return (
    <button type={props.type} className="button" onClick={props.onClick}>
      {props.children}
    </button>
  );
}; */

export default Button;

/*
태그드 템플릿 리터럴: 자바스크립트의 기본 기능으로 어떤 자바스크립트 프로젝트에서도 사용 가능하다.
- button은 styled 객체의 메소드로 호출할 때 ()를 붙이는 대신 백틱 두 개``를 붙인다.
백틱 사이에 전달되는 것이 Button 메소드로 간다.
button 메소드는 새로운 button 컴포넌트를 반환한다.
스타일컴포넌트는 우리가 설정한 스타일을 보고 자동으로 생성된 클래스 이름으로 이 스타일을 감싼다.
모든 클래스는 고유한 이름을 가지고 있기 때문에 앱에 있는 다른 컴포넌트에 전혀! 절대! 영향을 주지 않는다!
*/
