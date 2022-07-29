import React from "react";
import classes from"./Messages.module.css"

const Messages=(props)=> {
    return(
        <div>{props.messages}{props.id_m}</div>
    )
}

export default Messages;