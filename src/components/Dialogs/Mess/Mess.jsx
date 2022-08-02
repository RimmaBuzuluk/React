import React from "react"
import Messages from "./Messages/Messages";
import classes from"./Mess.module.css"


const Mess=(props,{id})=> {



let messagesElement=props.messagesData.map(m=><Messages id={m.id_m} messages={m.messages}/>);


    let newMessElement=React.createRef();

    let onSendessageClick=()=>{
        let text =newMessElement.current.value;
        alert(text);
    }
    return(
        <div className={classes.mess_body}>
            <h1>Dialog id: {id}</h1>
            <div>{messagesElement}</div>
            <div className={classes.mess_area}>
                <textarea  
                    className={classes.mess_area_1} 
                    ref={newMessElement} 
                    placeholder='Enter your masseges'>
                       
                </textarea>


                <button onClick={onSendessageClick} className={classes.button_item}>Send</button>
            </div>    
        </div>
    )
}

export default Mess;