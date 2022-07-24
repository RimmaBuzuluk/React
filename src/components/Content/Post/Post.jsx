import React from "react";
import classes from "./Post.module.css";
import Button from "./Button/Button";

const Post=() =>{

return <div className={classes.my_post}>
            <div className={classes.name_my_post}>My post</div>
            <form >
                <input type="text" className={classes.pole_text} />
            </form>
            <Button />
        </div>

       
    }

    export default Post;