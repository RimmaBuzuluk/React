import React from "react";
import Post from "./Post/Post.jsx";
import Post_old from "./Post_old/Post_old.jsx";
import Description from "./Descri/Description.jsx";
import classes from "./Content.module.css";

const Content = (props) => {
  let PostElement = props.contenPage.posts.map((posts) => (
    <Post_old
      id={posts.id}
      message={posts.message}
      like={posts.like}
      unlike={posts.unlike}
    />
  ));

  return (
    <div className={classes.content}>
      <div>
        <img
          alt=""
          className={classes.main__img}
          src="https://ukraine-hotel.kiev.ua/static/img/main_slider/3.eb3c2ccdc74e.jpg"
        />
      </div>
      <Description />
      <Post
        addPost={props.addPost}
        newPostText={props.contenPage.newPostText}
        posts={props.contenPage.posts}
        updateNewPostText={props.updateNewPostText}
        dispatch={props.dispatch}
      />
      {PostElement}
    </div>
  );
};

export default Content;
