import "./Card.css";

const Card = (props) => {
  const classes = "card " + props.className;
  //"card " <- 여기에 space 있어야 default 스타일인 card 클래스 말고 다른 클래스도 추가 됨. 아니면 클래스명 다 붙어버림 ^^.. 조심!

  return <div className={classes}>{props.children}</div>;
  /*
  props.children
  children은 내가 설정하지는 않았지만 예약어로, 언제나 사용자 지정 컴포넌트에 있는 열고 닫는 태그 사이에 있는 컨텐츠를 가리킨다.
  따라서 Card를 랩 컴포넌트(wrap component)로 사용하기 위해 Card 컴포넌트는 매개변수로 props을 받고, root 요소에 {props.children}을 적고
  <Card> 사이에 다른 컴포넌트나 jsx를 넣어서 사용하면 된다. </Card>
  */
};

export default Card;
