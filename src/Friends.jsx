import { use } from "react"
import Friend from "./Friend";

export default function Friends({friendPromise}){

    const friends = use(friendPromise);
    return(
        <div className="user">
            <h3>Friends : {friends.length} </h3>
            {
                friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
            }
        </div>
    )
}