import "./TodoItem.css";
import { TodoIcon } from "../TodoIcon/TodoIcon";
import React, { useEffect } from "react";

function TodoItem({
  id,
  text,
  completed,
  doChangeTaskState,
  doRemoveTask,
  doSortTask,
}) {

  const handleCheckBox = ($event) => {
    doChangeTaskState($event.target.value, !completed);
  };

  return (
    <li
      className={`todo__item ${completed && "status__completed"}`}
      id={"todo_item_id_" + id}
      index={id}
      draggable
    >
      <div className="item__check">
        <TodoIcon
          status={!!completed}
          type={"CHECK_ICON"}
          action={handleCheckBox}
          payload={text}
        ></TodoIcon>
      </div>
      <div className="item__text">{text}</div>
      <TodoIcon
        type={"BIN_ICON"}
        action={doRemoveTask}
        payload={text}
      ></TodoIcon>
    </li>
  );
}

export { TodoItem };
