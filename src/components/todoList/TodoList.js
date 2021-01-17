import { useState } from "react";
import TodoListItem from "./todoListItem/TodoListItem";

function TodoList() {
  let [items, setItems] = useState([
    { title: "Renew car insurance", id: 1 },
    { title: "Exercise", id: 2 },
    { title: "Homework", id: 3, dueDate: "asdfads" },
  ]);

  function onTodoLIstItemChanged(data) {
    let id = data.id;
    let title = data.title;
    let newItems = [...items].map((item) => {
      if (item.id === id) {
        return { ...item, title };
      }

      return item;
    });

    setItems(newItems);
  }

  return (
    <div className="row mx-1 px-5 pb-3 w-80">
      <div className="col mx-auto">
        {items.map((item) => {
          return (
            <TodoListItem
              key={item.id}
              onChange={onTodoLIstItemChanged}
              item={item}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TodoList;
