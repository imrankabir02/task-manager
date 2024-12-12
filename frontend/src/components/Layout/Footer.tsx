// src/components/Layout/Footer.tsx
import { CiMail } from "react-icons/ci";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
    return (
        <footer className="fixed bottom-0 left-0 w-full bg-white shadow-inner">
            <div className="px-4 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="pt-4 mt-2 border-t border-gray-200">
                    <div className="flex flex-col items-center justify-center space-y-2 sm:flex-row sm:justify-between sm:space-y-0">
                        {/* Copyright */}
                        <p className="text-sm text-gray-500">
                            © {new Date().getFullYear()} Task Management System. All rights reserved.
                        </p>

                        {/* Social Links */}
                        <div className="flex items-center space-x-4">
                            
                            <a href="mailto:imrankabir325@gmail.com"
                                className="flex items-center text-gray-600 transition-colors duration-300 hover:text-indigo-600 group"
                                title="Email"
                            >
                                <CiMail className="w-5 h-5" />
                                <span className="ml-2 text-sm transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                                    Email
                                </span>
                            </a>
                            
                            <a href="https://github.com/imrankabir02"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-gray-600 transition-colors duration-300 hover:text-indigo-600 group"
                                title="GitHub"
                            >
                                <FaGithub className="w-5 h-5" />
                                <span className="ml-2 text-sm transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                                    GitHub
                                </span>
                            </a>
                            
                            <a href="https://linkedin.com/in/imrankabir02"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center text-gray-600 transition-colors duration-300 hover:text-indigo-600 group"
                                title="LinkedIn"
                            >
                                <FaLinkedin className="w-5 h-5" />
                                <span className="ml-2 text-sm transition-opacity duration-300 opacity-0 group-hover:opacity-100">
                                    LinkedIn
                                </span>
                            </a>
                        </div>
                    </div>

                    {/* Made with love */}
                    <p className="mt-2 text-xs text-center text-gray-400">
                        Made with ❤️ by <a href="https://www.facebook.com/imrankabir02/"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Check in Facebook"
                            >Imran Kabir</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};