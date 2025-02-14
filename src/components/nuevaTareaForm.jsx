import { useState } from "react";
import PropTypes from "prop-types";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { format } from "date-fns";

function NuevaTareaForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [assignedStudent, setAssignedStudent] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState(new Date());
  const [priority, setPriority] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const newTask = {
      title,
      assignedStudent,
      description,
      dueDate: format(dueDate, "dd/MM/yyyy"),
      priority,
    };
    console.log(newTask);
    onAddTask(newTask);
    setTitle("");
    setAssignedStudent("");
    setDescription("");
    setDueDate(new Date());
  }

  return (
    <div className="flex bg-blue-100">
      <form
        className="bg-blue-100 flex rounded-lg w-full"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col w-full">
          <div className="flex flex-col p-4 bg-blue-200 rounded-lg">
            <label className="text-gray-700 font-semibold mb-2" htmlFor="title">
              Titulo de la tarea
            </label>
            <div className="flex flex-col rounded-lg">
              <input
                className="p-2 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="flex flex-col mt-4 rounded-lg">
              <label
                className="text-gray-700 font-semibold mb-2"
                htmlFor="assigned-student"
              >
                Estudiante
              </label>
              <input
                className="p-2 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="text"
                name="assigned-student"
                value={assignedStudent}
                onChange={(e) => setAssignedStudent(e.target.value)}
              />
            </div>
            <div className="flex flex-col mt-4 rounded-lg">
              <label
                className="text-gray-700 font-semibold mb-2"
                htmlFor="description"
              >
                Descripción
              </label>
              <input
                className="p-2 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="text"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <div className="flex flex-col mt-4 rounded-lg">
              <label
                className="text-gray-700 font-semibold mb-2"
                htmlFor="due-date"
              >
                Fecha de Entrega
              </label>
              <DatePicker
                selected={dueDate}
                onChange={(date) => setDueDate(date)}
                dateFormat="dd/MM/yyyy"
                className="p-2 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div className="flex flex-col mt-4 rounded-lg">
              <label
                className="text-gray-700 font-semibold mb-2"
                htmlFor="prioridad"
              >
                Prioridad
              </label>
              <input
                className="p-2 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="text"
                name="prioridad"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
              />
            </div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-600 transition mt-4"
              type="submit"
            >
              Aceptar
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
NuevaTareaForm.propTypes = {
  onAddTask: PropTypes.func.isRequired,
};

export default NuevaTareaForm;
