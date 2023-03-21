import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
  //객체에서 숫자로 변환: map()사용하여 객체 안에 든 value 값만 가져오는 배열 새로 만들어 주기
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);

  //스프레드 연산자를 사용하여 배열의 모든 요소를 가져와서 max 메소드에 독립적인 인자로 추가
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
