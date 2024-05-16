import "./App.css";
import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, removeTodo, changeStateTodo } from "./todoSlice.js";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import toast, { Toaster } from "react-hot-toast";

const notify = () => toast('Please enter your todos');

function App() {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todosState);
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputRef.current.value.trim()) {
      const newTodo = {
        id: Math.random(),
        text: inputRef.current.value,
        completed: false,
      };
      dispatch(addTodo(newTodo));
      inputRef.current.value = "";
    } else {
      notify();
    }
  };

  return (
    <div className="min-h-screen flex flex-col gap-5">
      <Navbar />
      <div className="flex-grow md:px-48 flex items-center flex-col gap-10">
        <div className="border p-4 flex inline-block">
          <form className="flex flex-col items-center gap-4" onSubmit={handleSubmit}>
            <label className="flex flex-col gap-4">
              <h3 className="font-bold">Create Todo</h3>
              <input
                className="input input-bordered w-full max-w-xs"
                type="text"
                ref={inputRef}
                placeholder="Text"
                aria-label="Todo text"
              />
            </label>
            <button className="btn px-20" type="submit">Submit</button>
          </form>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ">
          {todos.map((item) => (
            <li className=" flex flex-col gap-4 border rounded p-5" key={item.id} style={{ opacity: item.completed ? "0.5" : "1" }}>
              <h4>{item.text}</h4>
              <div className="flex gap-2">
                <button className="btn btn-secondary" onClick={() => dispatch(removeTodo(item.id))}>Delete</button>
                <button className="btn btn-primary" onClick={() => dispatch(changeStateTodo(item.id))}>Done</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
