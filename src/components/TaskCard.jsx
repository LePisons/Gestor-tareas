import PropTypes from "prop-types";

function TaskCard({ task }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-2 m-1 text-center">
      <div className="mb-2">
        <h2 className="text-xl font-bold">
          <span className="font-bold">Id: </span>
          {task.id}
        </h2>
        <h2 className="text-lg">
          <span className="font-bold">Estudiante Asignado: </span>
          {task.AssignedStudent}
        </h2>
      </div>
      <div className="mb-2">
        <h2 className="text-lg">
          <span className="font-bold">Titulo: </span>
          {task.title}
        </h2>
      </div>
      <div className="mb-2">
        <p className="text-lg font-semibold">
          <span className="font-medium">Descripción: </span>
          {task.description}
        </p>
      </div>
      <div className="mb-2">
        <p className="text-lg font-semibold">
          <span className="font-medium ">Vencimiento: </span>
          {task.dueDate}
        </p>
      </div>
      <div>
        <p className="text-lg font-semibold">
          <span>Prioridad: </span>
          <span
            className={`px-3 font-medium ${
              task.priority === "baja"
                ? "bg-green-200"
                : task.priority === "media"
                ? "bg-yellow-200"
                : "bg-red-200"
            }`}
          >
            {task.priority}
          </span>
        </p>
        <span></span>
      </div>
    </div>
  );
}

TaskCard.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    AssignedStudent: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    estatus: PropTypes.bool.isRequired,
    dueDate: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    priority: PropTypes.string.isRequired,
  }),
};

export default TaskCard;
