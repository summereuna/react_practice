import Chart from "../Chart/Chart";

//차트 반환하는 컴포넌트
//필터링된 비용을 props으로 가져온다.
const ExpenseChart = (props) => {
  //ChartDataPoint는 배열로 1~12월에 대한 지출비용을 담는다.
  const ChartDataPoint = [
    { label: "1월", value: 0 },
    { label: "2월", value: 0 },
    { label: "3월", value: 0 },
    { label: "4월", value: 0 },
    { label: "5월", value: 0 },
    { label: "6월", value: 0 },
    { label: "7월", value: 0 },
    { label: "8월", value: 0 },
    { label: "9월", value: 0 },
    { label: "10월", value: 0 },
    { label: "11월", value: 0 },
    { label: "12월", value: 0 },
  ];

  //props으로 받아온 필터링된 비용을 for 반복문을 사용하여 props에서 얻은 모든 비용을 반복 실행
  //해당 비용이 지출된 달을 가져와서 비용 금액에 따라 dataPoints 값 업데이트
  //of: 배열
  //in: 객체
  for (const expense of props.filteredExpenses) {
    //month는 0부터 시작하기 때문에 1월은 0임
    const expenseMonth = expense.date.getMonth();
    //ChartDataPoint 배열의 인덱스로 month 값을 사용하자: ChartDataPoint[0] => 1월에 지출한 비용에 대한 객체
    //숏컷 연산자로 선택된 데이터 포인트에 대한 값을 업데이트할 수 있다.
    ChartDataPoint[expenseMonth].value += expense.amount;
    //그런다음 모든 비용을 검토해서, 각 달의 모든 비용을 합산한다.
    //그리고 해당하는 달, 해당하는 dataPoints에 값을 할당한다.
    //반복문이 끝나면 value:0 으로 초기에 설정했던 값은 각 월에 지출된 비용을 합산한 값으로 업데이트 되어 있다.
    //Chart에 dataPoints props으로 업데이트된 ChartDataPoint를 보낸다.
  }
  return <Chart dataPoints={ChartDataPoint} />;
};

export default ExpenseChart;
