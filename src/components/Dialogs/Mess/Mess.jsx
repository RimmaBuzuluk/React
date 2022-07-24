import React from "react"
import classes from"./Mess.module.css"

const Mess=(props)=> {
    return(
        <div className={classes.mess_body}>
            <div className={classes.header_mess}></div>
            <div className={classes.dialog}></div>
        </div>
    )
}

export default Mess;