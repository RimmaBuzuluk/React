import contentReducer from "./content-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
  _state: {
    contenPage: {
      posts: [
        { id: 0, message: "Hi, how are you?", like: "567", unlike: "2" },
        { id: 1, message: "Добрый день, everybody", like: "776", unlike: "98" },
        {
          id: 2,
          message: "London is the capital of great britain",
          like: "762",
          unlike: "88",
        },
        { id: 3, message: "Slava Ukraine", like: "768", unlike: "0" },
        { id: 4, message: "Time to drink tea", like: "55", unlike: "22" },
        { id: 5, message: "Free Ukrain", like: "222", unlike: "2" },
        { id: 6, message: "Putin huilo", like: "666", unlike: "25" },
      ],

      newPostText: "",
    },

    dialogsPage: {
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
    },
  },

  getState() {
    return this._state;
  },

  _callSubscriber() {
    console.log("state is changed");
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.contenPage = contentReducer(this._state.contenPage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._callSubscriber(this._state);
  },
};

export default store;

window.store = store;
