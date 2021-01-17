import "./App.css";
import CreatorForm from "./components/creatorForm/CreatorForm";
import Filters from "./components/filters/Filters";
import Header from "./components/header/header";
import TodoList from "./components/todoList/TodoList";

function App() {
  return (
    <div className="App">
      <div className="container m-5 p-2 rounded mx-auto bg-light shadow">
        <Header />
        <CreatorForm />
        <Filters />
        <TodoList />
      </div>
    </div>
  );
}

export default App;
