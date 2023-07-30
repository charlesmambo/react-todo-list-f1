import React, {useState} from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';

function TodoList() {
    const [todos, setTodos] = useState([]);

    //ADD TO-DO ITEM 
    const addTodo = todo =>{
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }
        const newTodos = [todo, ...todos]
        setTodos(newTodos);
    };

    //EDIT TO-DO ITEM
    const updateTodoItem = (todoId, newValue) =>{
        if(!newValue.text || /^\s*$/.test(newValue.text)){
            return
        }

        setTodos(prev => prev.map(item =>(item.id === todoId ? newValue : item)))
    }

    //DELETE TO-DO ITEM FROM THE LIST
    const removeTodo = id =>{
        const removeTodArr = [...todos].filter(todo => todo.id !== id);
        setTodos(removeTodArr);
    }

    const completeTodo = id =>{
        let updateTodos = todos.map(todo =>{
            if(todo.id === id){
                todo.isComplete = !todo.isComplete
            }
            return todo;
        });
        setTodos(updateTodos);
    }


  return (
    <div>
     <h1>What`s the plan for today</h1>
    <TodoForm onSubmit={addTodo}/>
    <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodoItem={updateTodoItem}/>
    </div>   
  );
}


export default TodoList;