import PropTypes from "prop-types";
function Buttons({
  isOpen,
  setIsOpen,
  showList,
  setShowList,
  showTaskList,
  setShowTaskList,
  setShowTaskForm,
  showTaskForm,
}) {
  return (
    <>
      <div className="flex  justify-between">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-sm text-center mb-2 bg-blue-600 rounded-3xl p-2 border-gray-200 hover:bg-blue-500 transition duration-200"
        >
          Agregar nuevo estudiante
        </button>
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => setShowList(!showList)}
          className="text-white 
          text-center mb-2 text-sm  bg-blue-600 rounded-3xl p-2 border-gray-200 hover:bg-blue-500 transition duration-200"
        >
          Mostrar lista de estudiantes
        </button>
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => setShowTaskList(!showTaskList)}
          className="text-sm text-white text-center mb-2 bg-blue-600 rounded-3xl p-2 border-gray-200 hover:bg-blue-500 transition duration-200"
        >
          Mostrar lista tareas
        </button>
      </div>
      <div className="flex px-4 justify-items-start mt-2">
        <button
          onClick={() => setShowTaskForm(!showTaskForm)}
          className="text-sm text-white text-center bg-blue-600 rounded-3xl p-2 border-gray-200 hover:bg-blue-500 transition duration-200"
        >
          Agregar nueva tarea
        </button>
      </div>
    </>
  );
}

export default Buttons;

Buttons.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  showList: PropTypes.bool.isRequired,
  setShowList: PropTypes.func.isRequired,
  showTaskList: PropTypes.bool.isRequired,
  setShowTaskList: PropTypes.func.isRequired,
  setShowTaskForm: PropTypes.func.isRequired,
  showTaskForm: PropTypes.bool.isRequired,
};
