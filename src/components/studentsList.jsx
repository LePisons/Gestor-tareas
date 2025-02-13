import Students from "./Students";
import PropTypes from "prop-types";

function StudentsList({ initialStudentList }) {
  return (
    <div className="bg-blue-300 p-4 m-2 rounded-3xl">
      {initialStudentList.map((est) => (
        <Students key={est.id} est={est} />
      ))}
    </div>
  );
}

// Define prop types for StudentsList
StudentsList.propTypes = {
  initialStudentList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      assignedTasks: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    })
  ).isRequired,
};

export default StudentsList;
