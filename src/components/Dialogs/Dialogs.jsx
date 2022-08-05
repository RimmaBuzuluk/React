import React from "react";
import { useParams } from "react-router-dom";
import classes from "./Dialogs.module.css";
import Friends from "./Friends/Friends";
import Mess from "./Mess/Mess";

const Dialogs = (props) => {
  const { id } = useParams();

  return (
    <div className={classes.dialogs}>
      <Friends dialogsData={props.dialogsData} />
      <div className={classes.messages}>
        <Mess id={id} messagesData={props.messagesData} store={props.store} />
      </div>
    </div>
  );
};

export default Dialogs;
