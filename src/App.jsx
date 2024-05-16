// style
import "./App.css";
import { useRef } from "react";

// redux
import { useSelector } from "react-redux";
import {
  addTodo,
  removeTodo,
  changeStateTodo,
} from "./todoSlice.js";
import { useDispatch } from "react-redux";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todosState);
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Math.random(),
      text: inputRef.current.value,
      completed: false,
    };
    dispatch(addTodo(newTodo));

    inputRef.current.value = "";
  };

  return (
    <div>
      <Navbar/>
      <div className=" md:px-48 flex items-center flex-col gap-10">
        <div className="border p-4 flex  inline-block">
          <form className="flex flex-col  items-center gap-4" onSubmit={handleSubmit}>
            <label className="flex flex-col gap-4">
              <h3 className="font-bold">Create todo</h3>
              <input className="input input-bordered w-full max-w-xs" type="text" ref={inputRef} placeholder="Text" />
            </label>
            <button className="btn px-20">Submit</button>
          </form>
        </div>
        <ul>
          {todos.map((item) => {
            return (
              <li key={item.id}>
                <h4>{item.text}</h4>
                <button onClick={() => dispatch(removeTodo(item.id))}>Delete</button>
                <button onClick={() => dispatch()}>Done</button>
              </li>
            );
          })}
        </ul>
      </div>
      <Footer/>
    </div>
  );
}

export default App; 