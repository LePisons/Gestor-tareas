/*     id: 1,
    AssignedStudent: "Luis Pison",
    title: "Sacar la basura",
    description: "Se debe sacar la basura todos los dias",
    estatus: true,
    dueDate: "07-07-2021",
    createdAt: "07-07-2021",
    priority: "baja", */

function NuevaTareaForm() {
  return (
    <div className="flex">
      <form className="bg-cyan-50 flex rounded-lg w-full">
        <div className="flex flex-col w-full">
          <h5 className="text-white text-base text-center m-2 font p-1 shadow-lg rounded-3xl bg-gradient-to-r from-blue-500 to-purple-500">
            Nueva Tarea 😊
          </h5>
          <div className="mt-6"></div>
          <input type="text" name="assigned-student" />
        </div>
      </form>
    </div>
  );
}

export default NuevaTareaForm;
