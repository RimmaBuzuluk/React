import React from "react"
import classes from"./Dialogs.module.css"
import Friends from "./Friends/Friends";
import Mess from "./Mess/Mess";

const Dialogs =(props)=>{
    return(
        <div className={classes.dialogs}>
            <Friends />
        <div className={classes.messages}>
            <Mess />
        </div>
    </div>
    )
}

export default Dialogs;