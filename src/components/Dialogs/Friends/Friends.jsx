import React from "react"
import classes from "./Friends.module.css"

import Friend from "./Friend/Friend"
import { NavLink } from "react-router-dom"

const Friends =(props)=>{
    return(
    <div className={classes.dialogsItems}>
        <div className={classes.fff}>
            Friends
        </div>
        
        <NavLink to="/dialog/1">Zelenski Volodya</NavLink>
        <NavLink to="/dialog/2"><Friend friend_name="Baiden Jo" /></NavLink>
        <NavLink to="/dialog/3"><Friend friend_name="Duda Andjey"/></NavLink>
        <NavLink to="/dialog/4"><Friend friend_name="Quin"/></NavLink>
        <NavLink to="/dialog/5"><Friend friend_name="Makron"/></NavLink>
    </div>
        
    )
}

export default Friends;