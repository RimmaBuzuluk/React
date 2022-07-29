import React from "react"
import classes from "./Friends.module.css"

import Friend from "./Friend/Friend"




const Friends =(props)=>{


 
let dialogElement=props.dialogsData
.map(dialogsData=><Friend  friend_name={dialogsData.friend_name} id={dialogsData.id} />);



    return(
    <div className={classes.dialogsItems}>
        <div className={classes.fff}>
            Friends
        </div>
        {dialogElement}
    </div>
        
    )
}

export default Friends;