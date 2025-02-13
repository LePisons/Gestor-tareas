import PropTypes from "prop-types";
function Buttons({
  isOpen,
  setIsOpen,
  showList,
  setShowList,
  showTaskList,
  setShowTaskList,
}) {
  return (
    <>
      <div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white text-center mb-2 bg-blue-600 rounded-3xl p-2 border-gray-200 hover:bg-blue-500 transition duration-200"
        >
          Agregar nuevo estudiante
        </button>
      </div>
      <div>
        <button
          onClick={() => setShowList(!showList)}
          className="text-white text-center mb-2 bg-blue-600 rounded-3xl p-2 border-gray-200 hover:bg-blue-500 transition duration-200"
        >
          Mostrar lista de estudiantes
        </button>
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => setShowTaskList(!showTaskList)}
          className="text-white text-center mb-2 bg-blue-600 rounded-3xl p-2 border-gray-200 hover:bg-blue-500 transition duration-200"
        >
          Mostrar lista tareas
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
};
