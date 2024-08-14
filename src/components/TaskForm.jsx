import { useState,useContext } from "react";
import {TaskContext} from '../context/TaskContext' 
function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const {createTask} = useContext(TaskContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask({title,description})
    setTitle("");
    setDescription("");
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-10 mb-4">
        <h1 className="text-white text-2xl font-bold mb-3">Crea tu tarea</h1>
        <input
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Escribe tu tarea"
          value={title}
          autoFocus
          className="bg-slate-300 p-3 w-full mb-2"
        />
        <textarea
          className="bg-slate-300 p-3 w-full mb-2"
          value={description}
          onChange={e=> setDescription(e.target.value)}
          placeholder="Escribe la descripcion de  la tarea"></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white">Guardar</button>
      </form>
    </div>
    
  );
}

export default TaskForm;
