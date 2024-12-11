import { useEffect, useState } from 'react';
import { tasks } from '../../api/api';
import { Task } from '../../types';
import { TaskItem } from './TaskItem';

export const TaskList = () => {
  const [taskList, setTaskList] = useState<Task[]>([]);
  const [status, setStatus] = useState<string>('');
  const [search, setSearch] = useState('');

  const fetchTasks = async () => {
    try {
      const data = status
        ? await tasks.getByStatus(status as Task['status'])
        : await tasks.getAll();
      setTaskList(data);
    } catch (err) {
      console.error('Failed to fetch tasks:', err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [status]);

  const filteredTasks = taskList.filter(task =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <h2 className="text-2xl font-bold">Tasks</h2>
          <div className="flex flex-col sm:flex-row gap-4">
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            >
              <option value="">All Status</option>
              <option value="todo">To Do</option>
              <option value="started">Started</option>
              <option value="complete">Complete</option>
              <option value="archived">Archived</option>
            </select>
            <input
              type="text"
              placeholder="Search tasks..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        {filteredTasks.map(task => (
          <TaskItem 
            key={task.id} 
            task={task} 
            onUpdate={fetchTasks}
            onDelete={fetchTasks}
          />
        ))}
        {filteredTasks.length === 0 && (
          <div className="text-center text-gray-500 py-8">
            No tasks found
          </div>
        )}
      </div>
    </div>
  );
};