import { useState } from "react";
import Counter from "../components/Counter/Counter";

function Homework29() {
 // Создаем state для нашего Counter
 const [count, setCount] = useState<number>(0);

 // Создаем функцию, которая будет увеличивать наш count на 1
 const onPlus = () => {
   setCount((prevValue) => {
     return prevValue + 1;
   });
 };
 // Создаем функцию, которая будет уменьшать наш count на 1
 const onMinus = () => {
   setCount((prevValue) => prevValue - 1);
 };
 return (
   <div>
     <Counter count={count} onMinus={onMinus} onPlus={onPlus}/>
   </div>
 );
}
export default Homework29;