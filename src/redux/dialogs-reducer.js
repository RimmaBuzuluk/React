const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  messagesData: [
    { id_m: 1, messages: "Hi" },
    { id_m: 2, messages: "How is your it-kamasutra?" },
    { id_m: 3, messages: "Yo" },
    { id_m: 4, messages: "Добрий день, everybody" },
    { id_m: 5, messages: "Boris" },
  ],

  dialogsData: [
    { id: 0, friend_name: "Zelenski Volodya" },
    { id: 1, friend_name: "Baiden Jo" },
    { id: 2, friend_name: "Duda Andjey" },
    { id: 3, friend_name: "Quin" },
    { id: 4, friend_name: "Makron" },
  ],
  newMessageBody: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.newText;
      return state;
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = "";
      state.messagesData.push({
        id_m: 6,
        messages: body,
      });
      return state;
    default:
      return state;
  }
};

export const sendMessegeCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  newText: body,
});

export default dialogsReducer;
