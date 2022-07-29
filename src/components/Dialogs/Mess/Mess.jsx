import React from "react"
import Messages from "./Messages/Messages";
import classes from"./Mess.module.css"


const Mess=(props)=> {



let messagesElement=props.messagesData.map(m=><Messages id={m.id_m} messages={m.messages}/>);

  /*  let newMessElement=React.createRef();

    let addMess=()=>{
        let text =newMessElement.current.value;
        alert(text);
    }*/
    return(
        <div className={classes.mess_body}>
            <h1>Dialog id: {props.id}</h1>
            {messagesElement}
            <div className={classes.mess_area}>
                <textarea  className={classes.mess_area_1} /*ref={newMessElement}*/>
                </textarea>
                <button /*onClick={addMess}*/ className={classes.button_item}>Send</button>
            </div>    
        </div>
    )
}

export default Mess;