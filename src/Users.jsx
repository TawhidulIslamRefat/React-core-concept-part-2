import { use } from "react"

export default function Users ({fetchUser}){
  
  const user = use(fetchUser);
    return(
        <div className="user">
         <h1>User : {user.length} </h1>
         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa maxime facilis labore unde aperiam temporibus dignissimos nam necessitatibus. Inventore, modi.</p>
        </div>
    )
}