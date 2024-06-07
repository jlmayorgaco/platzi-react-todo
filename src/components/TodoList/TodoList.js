import './TodoList.css';

function TodoList(props) {
  if(props.hide){
    return (
      <div className="todo__list">
        <ul className="list__items">{props.children}</ul>
        <label className="list__controls">
          <img className="list_controls__icon" alt="Show" src="https://ingjorgeluismayorga.github.io/platzi-react-todo/eye.png" onClick={() => {props.setHide(false)} } /> 
          <span className="list_controls__text"> Show completed tasks</span> 
        </label>
      </div>
    );
  } else {
    return (
      <div className="todo__list">
        <ul className="list__items">{props.children}</ul>
        <label className="list__controls">
          <img className="list_controls__icon" alt="Hide" src="https://ingjorgeluismayorga.github.io/platzi-react-todo/blind.png" onClick={() => { props.setHide(true)}} /> 
          <span className="list_controls__text"> Hide completed tasks</span> 
        </label>
      </div>
    );
  }
  
}

export { TodoList };
