import React from "react";
import { addPostActionCreator, UpdateNewPostTextActionCreator } from "../../../redux/state";
import classes from "./Post.module.css";




const Post=(props) =>{


    let newPostElement=React.createRef();

     let addPost=()=>{
        
        let text =newPostElement.current.value;
        props.dispatch(addPostActionCreator());
       props.updateNewPostText(' ');
 }   

     let onPostChange=()=>{
        let text =newPostElement.current.value;
        let action =UpdateNewPostTextActionCreator(text);
        props.dispatch(action);
     }

return <div className={classes.my_post}>
            <div className={classes.name_my_post}>My post</div>
            <form >
                <textarea 
                placeholder="Enter your new post"
                onChange={onPostChange} 
                className={classes.pole_text} 
                ref={newPostElement} 
                value={props.newPostText}
                
                /> 

            </form>
            <button onClick={addPost} className={classes.button_item}>Send</button>
        </div>

       
    }

    export default Post;