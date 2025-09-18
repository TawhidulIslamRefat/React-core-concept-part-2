
import "./App.css";
import Batsman from "./Batsman";
import Counter from "./Counter";

function App() {
 function handleClick(){
  alert('Click the click me button')
 }
 const handleClick3 = () =>{
  alert('Click the number 3 button')
 }
const handleClick5 = (num) =>{
  const newNum = num + 5;
  alert(newNum);
}
  return (
    <>
      <h3>Vite + React</h3>
      <Batsman></Batsman>
      <Counter></Counter>
      <button onClick={handleClick}>Click me1</button>
      <button onClick={function handleClick2(){
        alert('Click 2 button')
      }}>On click2</button>
      <button onClick={handleClick3}>On click3</button>
      <button onClick={()=> alert('click 4')}>On click4</button>
      <button onClick={() => handleClick5(10)}>On click5</button>
    </>
  );
}

export default App;
