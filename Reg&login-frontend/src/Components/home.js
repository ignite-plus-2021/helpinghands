import React from "react";
const home=(props)=>{
    const handleLogout=()=>{
        props.history.push('/')
    }
    return(
        <div align='center'> 
        Welcome<br/><br></br>
        <input type="button"
        value="Logout"
        onClick={handleLogout}
        />
        </div>
    )
}
export default home;