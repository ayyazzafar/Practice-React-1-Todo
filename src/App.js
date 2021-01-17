import { useRef } from "react";
import "./App.css";
import CreatorForm from "./components/creatorForm/CreatorForm";
import Filters from "./components/filters/Filters";
import Header from "./components/header/header";
import TodoList from "./components/todoList/TodoList";

function App() {

  let todoList = useRef(null);

  function onNewItemSubmitClicked(item){
    todoList.current.addItem(item);
  }

  return (
    <div className="App">
      <div className="container m-5 p-2 rounded mx-auto bg-light shadow">
        <Header />
        <CreatorForm onSubmit={onNewItemSubmitClicked} />
        <Filters  />
        <TodoList ref={todoList} />
      </div>
    </div>
  );
}

export default App;
