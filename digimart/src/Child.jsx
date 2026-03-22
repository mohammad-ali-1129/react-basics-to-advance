import { useContext } from "react";
import { UserContext } from "./MyContext";


function Child(){
    const user = useContext(UserContext)


    return <h2>Welcome : {user}</h2>


}

export default Child 