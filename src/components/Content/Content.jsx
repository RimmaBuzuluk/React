import React from "react";
import Post from "./Post/Post.jsx"
import Post_old from "./Post_old/Post_old.jsx"
import Description from "./Descri/Description.jsx"
import classes from "./Content.module.css"


const Content =() =>{
return <div className={classes.content}>
            <div >
                <img className={classes.main__img} src='https://ukraine-hotel.kiev.ua/static/img/main_slider/3.eb3c2ccdc74e.jpg' />
            </div>   
            <Description />
            <Post />
            <Post_old message='Hi, how are you?' like='like: 31' unlike='unlike: 777'/>
            
            <Post_old message='It`s my first post' like='like: 3' unlike='unlike: 765'/>
            <Post_old message='Добрый день, everybody' like='like: 657' unlike='unlike: 76'/>
            <Post_old message='London is the capital of great britain' like='like: 3' unlike='unlike: 7'/>
            <Post_old message='Slava Ukraine' like='like: 100' unlike='unlike: 67'/>
            <Post_old message='Time to drink tea' like='like: 34' unlike='unlike: 8'/>
            <Post_old message='Free Ukrain' like='like: 3' unlike='unlike: 547'/>
            <Post_old message='Putin huilo' like='like: 98' unlike='unlike: 0'/>
    </div> 
}
              

export default Content;