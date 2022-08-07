const UPDATE_NEW_CONST_TEXT = "UPDATE-NEW-POST-TEXT";
const ADD_POST = "ADD-POST";

const contentReducer = (state, action) => {
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
