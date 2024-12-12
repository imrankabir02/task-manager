import { Link } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export const Navbar = () => {
    const { logout } = useAuth();

    return (
        <nav className="bg-gray-800">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <Link to="/tasks" className="text-xl font-bold text-white">
                            Task Manager
                        </Link>
                        <div className="flex items-baseline ml-10 space-x-4">
                            <Link
                                to="/tasks"
                                className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                            >
                                Tasks
                            </Link>
                            <Link
                                to="/tasks/new"
                                className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                            >
                                New Task
                            </Link>
                        </div>
                    </div>
                    <div>
                        <Link to={"/login"}
                            onClick={logout}
                            className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
                        >
                            Logout
                        
                        </Link>
                        {/* <button
                        </button> */}
                    </div>
                </div>
            </div>
        </nav>
    );
};