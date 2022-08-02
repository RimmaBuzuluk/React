import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Content from "./components/Content/Content";
import Dialogs from "./components/Dialogs/Dialogs";
import Headers from "./components/Header/Headers";
import Music from "./components/Music/Music";
import Nav from "./components/Navbar/Nav";
import News from "./components/News/News";
const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Headers />
        <Nav />
        <div style={{ width: 2500 }}>
          <Routes>
            <Route
              path="/content"
              element={
                <Content
                  contenPage={props.state.contenPage}
                  dispatch={props.dispatch}
                />
              }
            ></Route>

            <Route
              path="/dialog"
              element={
                <Dialogs
                  dialogsData={props.state.dialogsPage.dialogsData}
                  messagesData={props.state.dialogsPage.messagesData}
                />
              }
            ></Route>
            <Route path="/dialog/:id" element={<Dialogs />}></Route>

            <Route path="/news" element={<News />}></Route>
            <Route path="/music" element={<Music />}></Route>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
