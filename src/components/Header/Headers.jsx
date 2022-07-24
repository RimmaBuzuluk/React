import React from "react";
import classes from "./Header.module.css";

const Headers =() =>{
    return <header className={classes.header}>
          <img src='https://openclipart.org/image/800px/335924'/>
          <div className={classes.text_header}>People who support Ukrainians</div>
        </header>
}

export default Headers;