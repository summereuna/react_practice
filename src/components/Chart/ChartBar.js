import "./ChartBar.css";

const ChartBar = (props) => {
  //bar가 얼마나 fill되어야 할지 계산되는 변수
  //초기값은 "0%", css의 height 값에 들어가야 하기 때문
  let barFillHeight = "0%";

  //최대값(최대 지출 비용)이 0보다 큰지 확인
  if (props.maxValue > 0) {
    //1~100% 사이로 바가 채워질 퍼센티지를 가까운 정수로 반올림한 수에 %를 추가
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div
          className="chart-bar__fill"
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};

export default ChartBar;
