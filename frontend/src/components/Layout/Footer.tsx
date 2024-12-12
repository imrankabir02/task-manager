// src/components/Layout/Footer.tsx
export const Footer = () => {
    return (
        <footer className="fixed bottom-0 left-0 w-full bg-white shadow-inner">
            <div className="px-4 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {/* About Section */}
                    <div>
                        <h3 className="mb-2 text-sm font-semibold text-gray-900">
                            Task Management System
                        </h3>
                        <p className="text-xs text-gray-600">
                            Streamline your workflow and boost productivity.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-2 text-sm font-semibold text-gray-900">
                            Quick Links
                        </h3>
                        <ul className="space-y-1">
                            <li>
                                <a href="/tasks" className="text-xs text-gray-600 hover:text-indigo-600">
                                    Tasks
                                </a>
                            </li>
                            <li>
                                <a href="/tasks/new" className="text-xs text-gray-600 hover:text-indigo-600">
                                    Create Task
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="mb-2 text-sm font-semibold text-gray-900">
                            Connect With ME
                        </h3>
                        <ul className="space-y-1">
                            <li>
                                <a
                                    href="mailto:imrankabir325@gmail.com"
                                    className="text-xs text-gray-600 hover:text-indigo-600"
                                >
                                    Mail Me
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://github.com/imrankabir02"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs text-gray-600 hover:text-indigo-600"
                                >
                                    GitHub
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-4 mt-4 border-t border-gray-200">
                    <p className="text-xs text-center text-gray-500">
                        © {new Date().getFullYear()} Task Management System. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};