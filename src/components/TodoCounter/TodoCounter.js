import './TodoCounter.css'

function TodoCounter({ total, completed }) {
    return (
      <h2 className="todo__counter">
        Completed {completed} of {total}
      </h2>
    );
  }

  export { TodoCounter }