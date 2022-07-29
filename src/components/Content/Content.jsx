import React from "react";
import Post from "./Post/Post.jsx"
import Post_old from "./Post_old/Post_old.jsx"
import Description from "./Descri/Description.jsx"
import classes from "./Content.module.css"


const Content =(props) =>{

    /* let posts=[
        {id:0, message:'Hi, how are you?', like: '567', unlike: '2'},
        {id:1, message:'Добрый день, everybody', like: '776', unlike: '98'},
        {id:2, message:'London is the capital of great britain', like: '762', unlike: '88'},
        {id:3, message:'Slava Ukraine', like: '768', unlike: '0'},
        {id:4, message:'Time to drink tea', like: '55', unlike: '22'},
        {id:5, message:'Free Ukrain', like: '222', unlike: '2'},
        {id:5, message:'Putin huilo', like: '666', unlike: '25'},
    ]*/

    let PostElement=
    props.posts.map(posts=><Post_old id={posts.id} message={posts.message} like={posts.like} unlike={posts.unlike}/>)

return <div className={classes.content}>
            <div >
                <img className={classes.main__img} src='https://ukraine-hotel.kiev.ua/static/img/main_slider/3.eb3c2ccdc74e.jpg' />
            </div>   
            <Description />
            <Post />
            {PostElement}
            
    </div> 
}
              

export default Content;