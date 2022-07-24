import React from "react"
import classes from"./Friend.module.css"

const Friend =(props)=>{
    return(
     <div className={classes.dialog}>
        {props.friend_name}
    </div>
                
        
    )
}

export default Friend;