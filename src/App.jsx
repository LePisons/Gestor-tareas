// TODO: 1. Terminar el componente nuevaTareaForm.jsx

import Header from "./components/Header";
import NuevoEstudianteForm from "./components/nuevoEstudianteForm";
import { useState } from "react";
import StudentsList from "./components/studentsList";
import TaskList from "./components/TaskList";
import Buttons from "./components/Buttons";
import NuevaTareaForm from "./components/nuevaTareaForm";

const initialTask = [
  {
    id: 1,
    AssignedStudent: "Luis Pison",
    title: "Sacar la basura",
    description: "Se debe sacar la basura todos los dias",
    estatus: true,
    dueDate: "07-07-2021",
    createdAt: "07-07-2021",
    priority: "baja",
  },
  {
    id: 2,
    AssignedStudent: "Paulina Norambuena",
    title: "Pasear al perro",
    description: "Ponerle su correa y pasearlo",
    estatus: true,
    dueDate: "07-07-2021",
    createdAt: "07-07-2021",
    priority: "baja",
  },
];
const initialStudentList = [
  {
    id: 1,
    name: "Luis",
    lastName: "Pison",
    assignedTasks: null,
  },
  {
    id: 2,
    name: "Paulina",
    lastName: "Norambuena",
    assignedTasks: null,
  },
];

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [showList, setShowList] = useState(false);
  const [showTaskList, setShowTaskList] = useState(false);
  const [students, setStudents] = useState(initialStudentList);
  const [task, setTask] = useState(initialTask);
  const [showTaskForm, setShowTaskForm] = useState(false);

  function handleAddStudents(student) {
    setStudents((prevStudents) => [...prevStudents, student]);
  }

  function handleAddTask(task) {
    setTask((prevTask) => [...prevTask, task]);
  }

  return (
    <main className="sm:grid grid-cols-12 h-screen p-3">
      <div className="bg-cyan-50 min-h-2 sm:col-span-5 m-2 rounded-3xl">
        <Header />
        <div className="bg-blue-300 p-4 m-2 rounded-3xl">
          <div className="text-center bg-grey-100 p-2 grid sm:grid-cols-3 space-x-4">
            <Buttons
              isOpen={isOpen}
              setIsOpen={setIsOpen}
              showList={showList}
              setShowList={setShowList}
              showTaskList={showTaskList}
              setShowTaskList={setShowTaskList}
              setShowTaskForm={setShowTaskForm}
              showTaskForm={showTaskForm}
            />
          </div>
          {isOpen && (
            <NuevoEstudianteForm onAddhandleStudents={handleAddStudents} />
          )}
        </div>
        {showList && (
          <div>
            <h5 className="text-white text-bae text-center m-2 font p-1 shadow-lg rounded-3xl bg-gradient-to-r from-blue-500 to-purple-500">
              Lista de Estudiantes
            </h5>
            <StudentsList initialStudentList={students} />
          </div>
        )}
        {showTaskForm && (
          <div>
            <h5 className="text-white text-base text-center m-2 font p-1 shadow-lg rounded-3xl bg-gradient-to-r from-blue-500 to-purple-500">
              Nueva Tarea 😊
            </h5>
            <NuevaTareaForm onAddTask={handleAddTask} />
          </div>
        )}
      </div>
      {showTaskList && (
        <div
          id="lista-tareas"
          className="bg-cyan-50 min-h-2 sm:col-span-7 m-2 rounded-2xl"
        >
          <h1 className=" text-white text-2xl text-center m-2 font p-3 shadow-lg rounded-3xl bg-gradient-to-r from-blue-500 to-purple-500">
            Lista de tareas
          </h1>
          <div id="taskBar" className="grid-cols-4">
            <TaskList task={task} />
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
