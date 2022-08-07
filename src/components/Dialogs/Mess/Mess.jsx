import React from "react";
import Messages from "./Messages/Messages";
import classes from "./Mess.module.css";
import {
  updateNewMessageBodyCreator,
  sendMessegeCreator,
} from "../../../redux/dialogs-reducer";

const Mess = (props) => {
  let state = props.store.getState().dialogsPage;
  let messagesElement = state.messagesData.map((m) => (
    <Messages id={m.id_m} messages={m.messages} />
  ));
  let newMessageBody = state.newMessageBody;

  let newMessElement = React.createRef();
  ///////////////////////////
  let onSendMessageClick = () => {
    props.store.dispatch(sendMessegeCreator());
  };
  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
    console.log(body);
  };

  ////////////////////////////////////
  return (
    <div className={classes.mess_body}>
      <h1>Dialog id: {props.id}</h1>
      {messagesElement}
      <div className={classes.mess_area}>
        <textarea
          className={classes.mess_area_1}
          ref={newMessElement}
          value={newMessageBody}
          onChange={onNewMessageChange}
        ></textarea>
        <button onClick={onSendMessageClick} className={classes.button_item}>
          Send
        </button>
      </div>
    </div>
  );
};

export default Mess;
