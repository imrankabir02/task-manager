import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export const Navbar = () => {
    const { logout } = useAuth();

    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/tasks" className="text-white font-bold text-xl">
                            Task Manager
                        </Link>
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link
                                to="/tasks"
                                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                                Tasks
                            </Link>
                            <Link
                                to="/tasks/new"
                                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                                New Task
                            </Link>
                        </div>
                    </div>
                    <div>
                        <button
                            onClick={logout}
                            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};