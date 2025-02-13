import { useState } from "react";

function NuevoEstudianteForm({ onAddhandleStudents }) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const newStudent = { name, lastName };
    console.log(newStudent);
    onAddhandleStudents(newStudent);
    setName("");
    setLastName("");
  }
  return (
    <div>
      <form
        className="sm:flex items-center grid gap-3 bg-blue-200 p-4 rounded-lg shadow-md text-[0.8rem]"
        onSubmit={handleSubmit}
      >
        <label className="text-gray-700 font-semibold">Nombre</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          name="name"
          className="p-2 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <label className="m-1">Apellido</label>
        <input
          type="text"
          placeholder="Perez"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          name="lastName"
          className="p-2 border border-gray-300 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-full shadow-md hover:bg-blue-600 transition"
          type="submit"
        >
          Aceptar
        </button>
      </form>
    </div>
  );
}

export default NuevoEstudianteForm;
