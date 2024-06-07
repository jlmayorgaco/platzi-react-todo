import './TodoCreate.css';

function TodoCreate({doAddTask}) {
  function handleOnSubmit($event) {
    $event.preventDefault();
    const taskName = document.getElementById('add_task_name').value;
    try{
      doAddTask(taskName)
    } catch(err){
      window.alert(' Tarea Duplicada ')
    }
  }
  return (
    <form className="todo__create" onSubmit={handleOnSubmit}>
      <label htmlFor="add_task_name">Task Name </label>
      <input type="text" placeholder='Launch rocket to the moon' id="add_task_name" name="add_task_name" />
      <br/>
      <input type="submit" value="Create task"  />
    </form>
  );
}

export { TodoCreate };
