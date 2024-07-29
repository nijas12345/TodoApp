import React, { useState ,useEffect} from "react";
import { TodoForm } from "./TodoForm";
import {v4 as uuidv4 } from 'uuid';
import { Todo } from "./Todo"; 
import { EditTodoForm } from "./EditTodoForm"
uuidv4();

export const TodoWrapper = () =>{
    const [todos,setTodos] = useState([])

    const addTodo = (todo) =>{
      const isDuplicate = todos.some(existingTodo =>existingTodo.task === todo)
      if(!isDuplicate){
        setTodos ([...todos,{id:uuidv4(),task:todo,
            completed:false, isEditing:false
        },]); 
      }
      else{
        alert("Duplicate todo not allowed")
      }
    }
    console.log("todos",todos);

    useEffect(()=>{
      console.log("hello world");
    },[todos])

    const toggleComplete = (id) =>{
        setTodos(todos.map(todo =>todo.id === id ? 
            {...todo,completed:!todo.completed} :todo))
        }
    const deleteTodo = id =>{
      const confirmed = window.confirm('Are you sure want to delete this todo?')
      if(confirmed){
        setTodos (todos.filter(todo=>todo.id !== id))
      }
        
    }

    const editTodo = (id) => {
        setTodos(todos.map(todo => todo.id === id ? 
          {...todo,isEditing:!todo.isEditing} :todo
        ))
    }
    const editTask = (task,id) =>{
        setTodos (todos.map(todo=>todo.id ===id ?
          {...todo,task,isEditing:!todo.isEditing}:todo
        ))
    }

    return (
        <div className="TodoWrapper">
          <h1>Get Things Done !</h1>
          <TodoForm addTodo={addTodo} />
          {/* display todos */}
          {todos.map((todo) =>
            todo.isEditing ? (
              <EditTodoForm editTask={editTask} task={todo} />
            ) : (
              <Todo
                key={todo.id}
                task={todo}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
                toggleComplete={toggleComplete}
              />
            )
          )}
        </div>
      );
}
