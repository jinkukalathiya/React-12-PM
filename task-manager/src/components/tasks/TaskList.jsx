import { React, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask, toggleTask } from "./taskSlice";

export function TaskList() {
  const [text, setText] = useState("");
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) {
      return;
    }
    dispatch(addTask({ id: Date.now(), text, completed: false }));
    setText("");
  };
  return (
    <>
      <div className="my-5 w-[50%] mx-auto">
        <form onSubmit={handleSubmit}>
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter a new Task"
            className="bg-gray-50 border border-gray-150 block px-4 py-3 rounded-3xl w-full"
          />
          <button className="bg-indigo-600 text-white px-6 py-3 rounded-3xl w-full my-4">
            Add Task
          </button>
        </form>
      </div>

      <h2 className="text-4xl text-indigo-600 mb-6 font-bold">Tasks</h2>
      <div className="my-5 w-[50%] mx-auto">
        {tasks.map(task => (
            <ul key={task.id}>
                <li>
                    {task.text}
                </li>
            </ul>
        ))}
      </div>
    </>
  );
}
