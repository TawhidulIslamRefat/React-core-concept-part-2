import { useState } from "react"

export default function Batsman(){
    const[score,setScore] = useState(0);
    const handleSingle = ()=>{
        const updateScore = score + 1;
        setScore(updateScore)
    }
    const handleFour = ()=>{
        const updateScore = score + 4;
        setScore(updateScore)
    }
    const handleSix = ()=>{
        const updateScore = score + 6;
        setScore(updateScore)
    }
    return (
        <div>
            <h3>Player : Mayer doya Team Player</h3>
            {
                score > 50 && <h3>Your Score is Half Cencury</h3>
            }
            <h2>Score : {score} </h2>
            <button onClick={handleSingle}>Single</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleSix}>SIX</button>
        </div>
    )
}