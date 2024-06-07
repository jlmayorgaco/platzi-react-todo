import React from "react";

import { TodoCounter } from "./components/TodoCounter/TodoCounter";
import { TodoCreate } from "./components/TodoCreate/TodoCreate";
import { TodoItem } from "./components/TodoItem/TodoItem";
import { TodoList } from "./components/TodoList/TodoList";
import { TodoSearch } from "./components/TodoSearch/TodoSearch";
import { TodoEmpty } from "./components/TodoEmpty/TodoEmpty";
import { TodoError } from "./components/TodoError/TodoError";
import { TodoLoading } from "./components/TodoLoading/TodoLoading";
import { TodoConsumer, TodoContext } from "./components/TodoContext/TodoContext";


export function AppUI() {
const {
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
} = React.useContext(TodoContext)
  return (
    <React.Fragment>
    
          <div className="todo">
            <div className="todo todo__background"></div>
            <div className=" todo todo__container">
              <header className="todo__header"></header>
              <main className="todo__main">
                <section className="main__view">
                  <h1>CREATE NEW TASK</h1>
                  <TodoCreate doAddTask={doAddTask} />
                  {todoListIsDone && (
                    <img src={process.env.PUBLIC_URL + '/task_done.jpeg'} alt="ToDo's App Logo" />
                  )}
                  {!todoListIsDone && (
                    <img src={process.env.PUBLIC_URL + '/picture.jpg'} alt="ToDo's App Logo" />
                  )}
                </section>
                <section className="main__list">
                  <h1 className="list__title">Your tasks</h1>
                  <TodoCounter
                    completed={
                      todosList.filter((item) => !!item.completed).length
                    }
                    total={todosList.length}
                  />
                  <TodoSearch
                    searchValue={searchValue}
                    setSearchValue={setSearchValue}
                  />
                  <br />

                  <TodoList
                    hide={isHideFilterValue}
                    setHide={setIsHideFilterValue}
                  >
                    {loading && <TodoLoading />}

                    {error && <TodoError />}

                    {!loading && todosList.length === 0 && <TodoEmpty />}

                    {!loading &&
                      todosList.length > 0 &&
                      todosList.map((item) => (
                        <TodoItem
                          id={item.id}
                          key={item.text}
                          text={item.text}
                          completed={item.completed}
                          doRemoveTask={doRemoveTask}
                          doChangeTaskState={doChangeTaskState}
                          doSortTask={doSortTask}
                          onDragLeave={onDragLeave}
                        ></TodoItem>
                      ))}
                  </TodoList>
                </section>
              </main>
              <footer className="todo__footer"></footer>
            </div>
          </div>

    </React.Fragment>
  );
}
