'use client';
import barStyle from "@/app/styles/Barchart.module.css";
import { useState } from 'react';
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
  const [barData, setBardata] = useState([30, 20, 10, 20, 40]);
    function handleClick() {
      let updatedArray = randomlyUpdateArray(barData);
      setBardata( updatedArray);
    }
    function getRandomInt(min: number, max: number) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    function randomlyUpdateArray(array: any[]) {
      let randomIndex = getRandomInt(0, array.length - 1);
      let newValue = getRandomInt(1, 10);
      array[randomIndex] = newValue;
      return array;
    }


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
      {/* <Bar></Bar> */}
      <button onClick={handleClick}>Regenerator</button>
    </>
  );
}
