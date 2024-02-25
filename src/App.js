import React from "react";
import {Header,Body} from "./components/index"
import { Provider } from "react-redux";
import store from "./app/store";

function App() {
  return (
    <Provider store={store}>
    <div>
     <Header/>
     <Body/>
    </div>
    </Provider>
  );
}

export default App;
