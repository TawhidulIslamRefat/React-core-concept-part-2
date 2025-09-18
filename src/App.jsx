
import { Suspense } from "react";
import "./App.css";
import Batsman from "./Batsman";
import Counter from "./Counter";
import Users from "./Users";
import Friends from "./Friends";
import Post from "./Post";
 
const fetchUser = fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json());

const fetchFriends = async () =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  return res.json();
}
const fetchPost = async () =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  return res.json();
}




function App() {
  
  const friendPromise = fetchFriends();
  const postPromise = fetchPost();
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
      <Suspense fallback={<p> Loading post ....</p> }>
       <Post postPromise ={postPromise}></Post>
      </Suspense>
      <Suspense fallback={<h3>Loading....</h3>}>
        <Users fetchUser={fetchUser}></Users>
      </Suspense>

      <Suspense fallback={<h2>Friends ra sob..</h2>}>
        <Friends friendPromise={friendPromise}></Friends>
      </Suspense>
      {/* <Batsman></Batsman>
      <Counter></Counter>
      <button onClick={handleClick}>Click me1</button>
      <button onClick={function handleClick2(){
        alert('Click 2 button')
      }}>On click2</button>
      <button onClick={handleClick3}>On click3</button>
      <button onClick={()=> alert('click 4')}>On click4</button>
      <button onClick={() => handleClick5(10)}>On click5</button> */}
    </>
  );
}

export default App;
