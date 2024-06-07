import React from "react";
import { useLocalStorage } from "../../useLocalStorage";
const TodoContext = React.createContext();
const defaultTodos = [
  {
    id: 0,
    text: "Compose a Symphony of Dreams",
    completed: true,
  },
  {
    id: 1,
    text: "Paint the Sky with Cosmic Colors",
    completed: false,
  },
  {
    id: 2,
    text: "Architect a Virtual Wonderland",
    completed: false,
  },
];

function TodoProvider({ children }) {
  const [searchValue, setSearchValue] = React.useState("");
  const [
    todosListValue,
    setTodosListValue,
    loading,
    setLoading,
    error,
    setError,
  ] = useLocalStorage("TODOS_V1", [...defaultTodos]);
  const [isHideFilterValue, setIsHideFilterValue] = React.useState(false);
  const todosList = todosListValue
    .filter((item) => {
      if (searchValue)
        return item.text.toUpperCase().includes(searchValue.toUpperCase());
      else return item;
    })
    .filter((item) => {
      if (isHideFilterValue) return !item.completed;
      else return item;
    });

  const todoListIsDone = todosListValue.every((item) => !!item.completed);

  const doSortTask = (taskIndexFrom, taskIndexTo) => {};

  const doChangeTaskState = (taskName, taskState) => {
    const _todosListValue = todosListValue.map((item) => {
      if (item.text === taskName)
        return { text: taskName, completed: taskState, id: item.id };
      else return item;
    });
    localStorage.setItem("TODOS_V1", JSON.stringify(_todosListValue));
    setTodosListValue(_todosListValue);
  };

  const doRemoveTask = (taskName) => {
    const _todosListValue = todosListValue
      .filter((item) => item.text !== taskName)
      .map((item, index) => ({ ...item, id: index }));
    localStorage.setItem("TODOS_V1", JSON.stringify(_todosListValue));
    setTodosListValue(_todosListValue);
  };

  const doAddTask = (taskName) => {
    const isRepeted = !!todosListValue.find((item) => item.text === taskName);
    const _todosListValue = [...todosListValue];
    if (isRepeted || taskName === "") {
      return true;
      //throw new Error('Duplicated TaskName')
    }
    _todosListValue.push({
      id: _todosListValue.length,
      text: taskName,
      completed: false,
    });
    localStorage.setItem("TODOS_V1", JSON.stringify(_todosListValue));
    setTodosListValue(_todosListValue);
  };


  const onDragLeave = ($event) => {
    console.log('Leave')
    console.log($event)
  }

  return (
    <TodoContext.Provider
      value={{
        doAddTask,
        todosList,
        todoListIsDone,
        searchValue,
        setSearchValue,
        isHideFilterValue,
        setIsHideFilterValue,
        doRemoveTask,
        doChangeTaskState,
        doSortTask,
        error,
        loading,
        onDragLeave
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

function TodoConsumer() {
  return <TodoContext.Consumer></TodoContext.Consumer>;
}

export { TodoContext, TodoProvider, TodoConsumer };
