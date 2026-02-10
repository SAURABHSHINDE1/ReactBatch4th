import { useState } from "react";
import "./Todo.css";

const TodoApp = () => {

    const [inputval , setInputval ] = useState('')

  return (
    <>
      <h2>{inputval}</h2>

      <div className="container">

        <form action="">

          <input type="text" value={inputval}  onChange={(e)=>setInputval(e.target.value)}/>

          <button>Add Task</button>


        </form>
      </div>


      <div className="todo-Container">

        <div className="task">
            <h2>Hello</h2>
        </div>

      </div>
    </>
  );
};

export default TodoApp;
