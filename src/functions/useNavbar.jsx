import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import navbarData from "../data/navbarData.jsx";

const useNavbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(navbarData[0]?.id || 'home');
    const [isScrolled, setIsScrolled] = useState(false);
    const [hoveredItem, setHoveredItem] = useState(null);
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

    return {
        isMenuOpen,
        isScrolled,
        theme,
        activeItem,
        hoveredItem,
        toggleTheme,
        toggleMenu,
        handleMenuClick,
        isActive,
        isHovered,
        setHoveredItem,
    };
};

export default useNavbar;