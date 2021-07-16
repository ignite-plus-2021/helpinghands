import React from "react";
consthome=(props)=>{
    const handleLogout=()=>{
        props.history.push('/login)')
    }
    return(
        <div> 
        Welcome
        <input type="button"
        value="Logout"
        onClick={handleLogout}
        />
        </div>
    )
}
export default home;