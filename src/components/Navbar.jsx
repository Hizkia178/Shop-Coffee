import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import navbarData from "../data/navbarData.jsx";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(navbarData[0]?.id || 'home');
    const [isScrolled, setIsScrolled] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null);
    const [clickedItem, setClickedItem] = useState(null);
    const [theme, setTheme] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem("theme") || "light";
        }
        return "light";
    });

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (typeof window !== "undefined") {
            document.documentElement.classList.toggle("dark", theme === "dark");
            localStorage.setItem("theme", theme);
        }
    }, [theme]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (clickedItem) {
            const timer = setTimeout(() => setClickedItem(null), 200);
            return () => clearTimeout(timer);
        }
    }, [clickedItem]);

    useEffect(() => {
        const currentPath = location.pathname;
        const match = navbarData.find(item => item.href === currentPath);
        if (match) setActiveItem(match.id);
    }, [location]);

    const toggleTheme = () => {
        setTheme(prev => (prev === "light" ? "dark" : "light"));
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleMenuClick = (itemId) => {
        setActiveItem(itemId);
        setClickedItem(itemId);
        setIsMenuOpen(false);

        const item = navbarData.find(i => i.id === itemId);
        if (!item) return;

        if (item.href?.startsWith("/")) {
            navigate(item.href);
        } else {
            const section = document.getElementById(itemId);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    const isActive = (itemId) => activeItem === itemId;
    const isHovered = (itemId) => hoveredItem === itemId;
    const isClicked = (itemId) => clickedItem === itemId;

    const getButtonClass = (itemId) => {
        const baseClass = "transition-all duration-300 flex items-center gap-2 px-4 py-2 rounded-lg font-medium";

        if (isActive(itemId)) {
            return `${baseClass} text-white bg-blue-600 shadow-lg scale-105 dark:bg-blue-600 dark:text-white`;
        }

        if (isHovered(itemId) || isClicked(itemId)) {
            return `${baseClass} text-white bg-blue-600 shadow-lg scale-105 dark:text-blue-400 dark:bg-blue-900/50`;
        }

        return `${baseClass} text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:shadow-lg hover:scale-105`;
    };

    const getMobileButtonClass = (itemId) => {
        const baseClass = "w-full flex items-center gap-3 text-left p-4 rounded-xl transition-all duration-300 relative";

        if (isActive(itemId)) {
            return `${baseClass} text-white bg-gradient-to-r from-blue-600 to-blue-700 shadow-lg transform scale-105 border-l-4 border-blue-300`;
        }

        if (isHovered(itemId) || isClicked(itemId)) {
            return `${baseClass} text-blue-600 bg-blue-50 shadow-lg transform scale-105 dark:text-blue-400 dark:bg-blue-900/50 border-l-4 border-blue-400`;
        }

        return `${baseClass} text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:shadow-lg hover:transform hover:scale-105 hover:border-l-4 hover:border-blue-400`;
    };

    return (
        <>
            <nav
                className={`bg-white p-4 fixed w-full top-0 z-50 dark:bg-gray-900 transition-all duration-300 overflow-hidden ${
                    isScrolled ? 'shadow-lg bg-white/95 dark:bg-gray-900/95' : 'shadow-lg'
                }`}
            >
                <div className="container">
                    <div className="max-w-7xl mx-auto flex justify-between items-center">
                        <div
                            className="text-gray-900 dark:text-white text-2xl font-bold flex items-center gap-2 hover:text-blue-500 dark:hover:text-blue-400 transition duration-300 cursor-pointer"
                            onClick={() => handleMenuClick(navbarData[0]?.id || 1)}
                        >
                            <i className="bx bx-coffee"></i>
                            <span>Golden Hour Coffee</span>
                        </div>

                        <ul className="hidden md:flex space-x-6 items-center">
                            {navbarData.map((item) => (
                                <li key={item.id}>
                                    <button
                                        onClick={() => handleMenuClick(item.id)}
                                        onMouseEnter={() => setHoveredItem(item.id)}
                                        onMouseLeave={() => setHoveredItem(null)}
                                        className={getButtonClass(item.id)}
                                    >
                                        <i className={item.icon}></i>
                                        {item.label}
                                    </button>
                                </li>
                            ))}
                            <li>
                                <button
                                    onClick={toggleTheme}
                                    className="text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300 text-2xl p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:scale-110 hover:shadow-lg"
                                >
                                    <i className={`bx ${theme === 'dark' ? 'bx-sun' : 'bx-moon'}`}></i>
                                </button>
                            </li>
                        </ul>

                        <div className="md:hidden">
                            <button
                                onClick={toggleMenu}
                                className="text-gray-900 dark:text-white p-2 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 hover:shadow-lg"
                            >
                                <i className={`bx ${isMenuOpen ? 'bx-x' : 'bx-menu'} text-3xl`}></i>
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <div
                className={`fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-900 shadow-2xl z-50 transform transition-all duration-500 ease-out ${
                    isMenuOpen ? "translate-x-0" : "translate-x-full"
                } md:hidden border-l-2 border-blue-100 dark:border-blue-900/50`}
            >
                <div className="p-6 h-full overflow-y-auto">
                    <div className="flex items-center justify-between mb-8 pb-4 border-b-2 border-gray-200 dark:border-gray-700">
                        <div className="flex items-center gap-3">
                            <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-lg shadow-lg">
                                <i className="bx bx-coffee text-2xl text-blue-600 dark:text-blue-400"></i>
                            </div>
                            <h2 className="text-sm font-bold text-gray-900 dark:text-white">
                                Golden Hour Coffee
                            </h2>
                        </div>
                        <button
                            onClick={toggleMenu}
                            className="text-gray-900 dark:text-white p-2 rounded-lg hover:bg-red-50 dark:hover:bg-red-900/20 transition-all duration-300 hover:shadow-lg"
                        >
                            <i className="bx bx-x text-3xl"></i>
                        </button>
                    </div>

                    <div className="mb-6">
                        <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                            Navigation
                        </h3>
                        <ul className="flex flex-col space-y-3">
                            {navbarData.map((item) => (
                                <li key={item.id}>
                                    <button
                                        onClick={() => handleMenuClick(item.id)}
                                        onMouseEnter={() => setHoveredItem(item.id)}
                                        onMouseLeave={() => setHoveredItem(null)}
                                        className={getMobileButtonClass(item.id)}
                                    >
                                        <div className="flex items-center gap-3 flex-1">
                                            <div
                                                className={`p-2 rounded-lg transition-all duration-300 ${
                                                    isActive(item.id) ? 'bg-white/20' : 'bg-gray-100 dark:bg-gray-800'
                                                }`}
                                            >
                                                <i className={`${item.icon} text-xl`}></i>
                                            </div>
                                            <span className="font-medium">{item.label}</span>
                                        </div>

                                        {isActive(item.id) && (
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                                <i className="bx bx-chevron-right text-xl"></i>
                                            </div>
                                        )}

                                        {!isActive(item.id) && (isHovered(item.id) || isClicked(item.id)) && (
                                            <i className="bx bx-chevron-right text-xl opacity-70"></i>
                                        )}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="mb-6 pt-6 border-t-2 border-gray-200 dark:border-gray-700">
                        <h3 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                            Settings
                        </h3>
                        <button
                            onClick={toggleTheme}
                            className="w-full flex items-center gap-3 text-left p-4 rounded-xl text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:shadow-lg hover:transform hover:scale-105 hover:border-l-4 hover:border-blue-400"
                        >
                            <div className="p-2 bg-gray-100 dark:bg-gray-800 rounded-lg">
                                <i className={`bx ${theme === 'dark' ? 'bx-sun' : 'bx-moon'} text-xl`}></i>
                            </div>
                            <span className="font-medium">{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
                            <i className="bx bx-toggle-right text-2xl ml-auto"></i>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;