const UPDATE_NEW_CONST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";

let initialState = {
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
};

const contentReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 7,
        message: state.newPostText,
        like: 0,
        unlike: 0,
      };
      state.posts.push(newPost);
      state.newPostText = "";
      return state;
    case UPDATE_NEW_CONST_TEXT:
      state.newPostText = action.newText;
      return state;
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const UpdateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_CONST_TEXT,
  newText: text,
});

export default contentReducer;
