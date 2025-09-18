export default function Friend ({friend}){
    const {name,email,phone} = friend
    return (
        <div className="user">
            <h3>Name : {name} </h3>
            <h6>Email : {email} </h6>
            <h6> Phone : {phone} </h6>
        </div>
    )
}