import React from "react";
import classes from "./Post.module.css";

const Post=(props) =>{


    let newPostElement=React.createRef();

     let addPost=()=>{
        let text =newPostElement.current.value;
        props.addPost(text);
 }   

return <div className={classes.my_post}>
            <div className={classes.name_my_post}>My post</div>
            <form >
                <textarea className={classes.pole_text} ref={newPostElement}></textarea> 
            </form>
            <button onClick={addPost} className={classes.button_item}>Send</button>
        </div>

       
    }

    export default Post;