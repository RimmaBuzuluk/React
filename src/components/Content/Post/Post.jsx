import React from "react";
import classes from "./Post.module.css";
import {
  addPostActionCreator,
  UpdateNewPostTextActionCreator,
} from "../../../redux/state";

const Post = (props) => {
  let newPostElement = React.createRef();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(UpdateNewPostTextActionCreator(text));
  };

  return (
    <div className={classes.my_post}>
      <div className={classes.name_my_post}>My post</div>
      <form>
        <textarea
          onChange={onPostChange}
          className={classes.pole_text}
          ref={newPostElement}
          value={props.newPostText}
        />
      </form>
      <button onClick={addPost} className={classes.button_item}>
        Send
      </button>
    </div>
  );
};

export default Post;
