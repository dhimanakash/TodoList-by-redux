import { Button } from "@material-ui/core";
import React, { useState } from "react";
import todo from "./todo.css";
import { addTodo, deleteTodo, removeTodo } from "../actions/index";
import { useSelector, useDispatch } from "react-redux";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";

const Todo = () => {
  const [inp, setInp] = useState("");
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todoReducer.list);

  const inpChange = (e) => {
    return setInp(e.target.value);
  };

  return (
    <div className="main-div">
      <div className="child-div">
        {/* Todo Function  */}
        <h1>Redux ToDo List ✍️</h1>
        <div className="input-div">
          <input
            type="text"
            placeholder=" ⏰ Add Items... "
            onChange={inpChange}
            value={inp}
          />
          <Button
            variant="outlined"
            color="primary"
            onClick={() => dispatch(addTodo(inp), setInp(""))}
          >
            +
          </Button>
        </div>

        {/* TodoList Function */}
        <div className="todo-list">
          {list.map((elem) => {
            return (
              <div className="del-todo" key={elem.id}>
                <h2>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => dispatch(deleteTodo(elem.id))}
                  >
                    <DeleteOutlineIcon />
                  </Button>
                  {elem.data}
                </h2>
              </div>
            );
          })}
        </div>
        {/* Remove all todo function */}

        <div className="remove-todo">
          <Button
            variant="outlined"
            color="default"
            onClick={() => dispatch(removeTodo())}
          >
            Remove All
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Todo;
