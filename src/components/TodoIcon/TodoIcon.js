import './TodoIcon.css';

const icons = {
    'CHECK_ICON' : function(type, action, payload, status) { 
                    return <div className="icon_check icon__container">
                              <input
                                  type="checkbox"
                                  name={'item_checked_input' + payload}
                                  id={'item_checked_input' + payload}
                                  value={payload}
                                  checked={status}
                                  onChange={($event) => action($event)} 
                                ></input>
                                <label htmlFor={'item_checked_input' + payload}></label>
                            </div>
    },
    'BIN_ICON' :  function(type, action, payload, status) {   
                    return <div className="icon_bin icon__container" onClick={() => { action(payload) }}>
                              <img src="https://ingjorgeluismayorga.github.io/platzi-react-todo/bin.png" alt="Delete Task Button"></img>
                          </div>
    },
}

function TodoIcon({type, action, payload, status}) {
  return (
    <div className="todo__icon" >
      { icons[type](type, action, payload, status) }
    </div>
  );
}

export { TodoIcon };



// <img className="item__remove" src="/bin.png" alt="Delete Task Button" onClick={($event) => doRemoveTask(text)}/>
