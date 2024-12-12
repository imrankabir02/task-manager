import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { tasks } from '../../api/api';
import { Task, TaskStatus } from '../../types';

export const TaskUpdate = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [formData, setFormData] = useState<Task>({
        id: 0,
        title: '',
        description: '',
        status: 'todo',
        due: new Date().toISOString().slice(0, 16),
        created: '',
        updated: '',
        user: 0
    });

    useEffect(() => {
        const fetchTask = async () => {
            try {
                if (!id) return;
                const response = await tasks.getById(parseInt(id));
                setFormData({
                    ...response,
                    due: new Date(response.due).toISOString().slice(0, 16)
                });
            } catch (err) {
                setError('Failed to fetch task');
                console.error('Error fetching task:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchTask();
    }, [id]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (!id) return;
            await tasks.update(parseInt(id), {
                ...formData,
                due: new Date(formData.due).toISOString()
            });
            navigate('/tasks');
        } catch (err) {
            setError('Failed to update task');
            console.error('Error updating task:', err);
        }
    };

    if (loading) {
        return (
            <div className="flex items-center justify-center h-64">
                <div className="text-xl text-gray-500">Loading...</div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="px-4 py-3 text-red-700 border border-red-200 rounded bg-red-50">
                {error}
            </div>
        );
    }

    return (
        <div className="max-w-2xl p-6 mx-auto bg-white rounded-lg shadow-md">
            <h2 className="mb-6 text-2xl font-bold">Update Task</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Title
                    </label>
                    <input
                        type="text"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Description
                    </label>
                    <textarea
                        value={formData.description}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        rows={4}
                        className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Status
                    </label>
                    <select
                        value={formData.status}
                        onChange={(e) => setFormData({ ...formData, status: e.target.value as TaskStatus })}
                        className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    >
                        <option value="todo">To Do</option>
                        <option value="started">Started</option>
                        <option value="complete">Complete</option>
                        <option value="archived">Archived</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">
                        Due Date
                    </label>
                    <input
                        type="datetime-local"
                        value={formData.due}
                        onChange={(e) => setFormData({ ...formData, due: e.target.value })}
                        className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                    />
                </div>

                <div className="flex justify-end space-x-3">
                    <button
                        type="button"
                        onClick={() => navigate('/tasks')}
                        className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Update Task
                    </button>
                </div>
            </form>
        </div>
    );
};