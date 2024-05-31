import barStyle from "@/app/styles/Barchart.module.css";
export function Bar() {
  return (
    <>
      <div className={barStyle.barLabel}>Red</div>
      <div className={barStyle.barLabel}>Blue</div>
      <div className={barStyle.barLabel}>Yellow</div>
      <div className={barStyle.barLabel}>Green</div>
      <div className={barStyle.barLabel}>Purple</div>
      <div className={barStyle.barLabel}>Orange</div>
    </>
  );
}
export default function Barchart() {
  const barData = [30, 20, 10, 20, 40];
  return (
    <>
      <div className={barStyle.chartcontainer}>
        {barData.flatMap((data, index) => (
          <div
            className={barStyle.bar}
            style={{ height: data*10 + "px" }}
            key={index}
          >
            { data }
          </div>
        ))}
      </div>
      <Bar></Bar>
    </>
  );
}
