import { useNavigate } from 'react-router-dom';
import { tasks } from '../../api/api';
import { Task } from '../../types';
import { TiEdit } from "react-icons/ti";

interface TaskItemProps {
  task: Task;
  onUpdate: () => void;
  onDelete: () => void;
}

const statusColors = {
  todo: 'bg-yellow-100 text-yellow-800',
  started: 'bg-blue-100 text-blue-800',
  complete: 'bg-green-100 text-green-800',
  archived: 'bg-gray-100 text-gray-800',
};

export const TaskItem = ({ task, onUpdate, onDelete }: TaskItemProps) => {

  const navigate = useNavigate()

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      try {
        await tasks.delete(task.id);
        onDelete();
      } catch (err) {
        console.error('Failed to delete task:', err);
      }
    }
  };

  const handleStatusChange = async (newStatus: Task['status']) => {
    try {
      await tasks.update(task.id, { ...task, status: newStatus });
      onUpdate();
    } catch (err) {
      console.error('Failed to update task:', err);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <h3 className="text-lg font-medium">{task.title}</h3>
          <p className="text-gray-600">{task.description}</p>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-500">
              Due: {new Date(task.due).toLocaleString()}
            </span>
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${statusColors[task.status]}`}>
              {task.status}
            </span>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <select
            value={task.status}
            onChange={(e) => handleStatusChange(e.target.value as Task['status'])}
            className="px-2 py-1 text-sm border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
          >
            <option value="todo">To Do</option>
            <option value="started">Started</option>
            <option value="complete">Complete</option>
            <option value="archived">Archived</option>
          </select>
          <button
            onClick={() => navigate(`/tasks/${task.id}/edit`)}  // Changed from navigator to navigate
            className="inline-flex items-center p-2 text-indigo-600 border border-transparent rounded-md hover:bg-indigo-50"
          >
            <TiEdit size={25}/>
          </button>
          <button
            onClick={handleDelete}
            className="inline-flex items-center p-1 text-white bg-red-600 border border-transparent rounded-full shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};