import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";
import store from "./TodoList/store";
import TodoList from "./TodoList/TodoList";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Provider store={store}>
          <TodoList />
        </Provider>
      </Fragment>
    );
  }
}

export default App;
