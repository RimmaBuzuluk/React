import React from "react";
import classes from"./Post_old.module.css"

const Post_old =(props) =>{
return <div classes={classes.butt_post}>
  <div className={classes.post_block}>
    <div className={classes.cercle}></div>
    <div className={classes.text}>{props.message}</div>
  </div>
  <div className="like">
    <button className={classes.button_item}>{props.like}</button>
    <button className={classes.button_item}>{props.unlike}</button>
  </div>  
</div>
}

export default Post_old;