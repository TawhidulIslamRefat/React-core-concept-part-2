export default function Posts ({pot}){
    const {userId,title,body} = pot;
    return (
        <div className="user">
            <h3>User Id : {userId}</h3>
            <h6>Title : {title} </h6>
            <h6> Body : {body} </h6>
        </div>
    )
}