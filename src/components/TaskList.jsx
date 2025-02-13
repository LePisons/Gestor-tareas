import TaskCard from "./TaskCard";
import PropTypes from "prop-types";

function TaskList({ task }) {
  return (
    <div className="sm:grid grid-cols-4 gap-4 p-4">
      {task.map((task) => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  );
}

TaskList.propTypes = {
  task: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      AssignedStudent: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      dueDate: PropTypes.string.isRequired,
      priority: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default TaskList;
