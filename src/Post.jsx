import { use } from "react"
import Posts from "./Posts";

export default function Post({postPromise}){
    const post= use(postPromise);
    console.log(post);
    return(
        <div className="user">
            <h2>Post : {post.length} </h2>
            {
                post.map(pot => <Posts pot={pot}></Posts>)
            }
        </div>
    )
}