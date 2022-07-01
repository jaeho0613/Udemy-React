import './App.css';
import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";
import {useState} from "react";

function App() {
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodoHandler = (text: string) => {
        const todo = new Todo(text);
        setTodos((prevState => {
            return prevState.concat(todo);
        }));
    }

    const removeTodoHandler = (todoId: string) => {
        setTodos((prevTodos) => {
            return prevTodos.filter(todo => todo.id !== todoId);
        })
    }

    return (
        <div> 
            <NewTodo onAddTodo={addTodoHandler}/>
            <Todos items={todos} onRemoveTodo={removeTodoHandler}/>
        </div>
    );
}

export default App;
