import PropTypes from "prop-types";
function Students({ est }) {
  return (
    <ul className="flex flex-col items-center">
      <li className=" text-white text-center mb-5 bg-gradient-to-r from-blue-500 to-green-200  rounded-2xl shadow-md w-1/2 border-gray-300 hover:bg-gray-200 transition duration-200">
        {est.name} {est.lastName} <button>❌</button>
      </li>
    </ul>
  );
}

Students.propTypes = {
  est: PropTypes.shape({
    name: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
  }).isRequired,
};

export default Students;
