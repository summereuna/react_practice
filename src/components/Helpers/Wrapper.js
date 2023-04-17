//props.children 원리 사용하여 컴포넌트 감싸는 랩퍼 컴포넌트로 div soup 해결하기
//Wrapper 자체는 빈 컴포넌트이지만 props.children을 반환하기 때문에 jsx에서 단 하나의 루트 요소만 반환해야 한다는 조건을 만족시킬 수 있음
const Wrapper = (props) => {
  return props.children;
};

export default Wrapper;
