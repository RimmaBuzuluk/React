import React from "react"
import classes from"./Friend.module.css"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavLink } from "react-router-dom"

const Friend =(props)=>{
    return(
     <div className={classes.dialog}>
        <NavLink to={"/dialog/"+props.id}>{props.friend_name}</NavLink>
        
    </div>
                
        
    )
}

export default Friend;