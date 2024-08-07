import React from "react";
import { Link, useLocation } from "react-router-dom";

interface SidebarProps {
    toggleSidebar: () => void; // Callback function to toggle sidebar state  // eslint-disable-line @typescript-eslint/no-explicit-any
}

const Sidebar: React.FC<SidebarProps> = () => {
    const path = {
        home: {
            name: "หน้าหลัก",
            path: "/home",
        },
        history: {
            name: "ประวัติ",
            path: "/history",
        },
    };

    const location = useLocation();

    return (
        <div className="mt-6">
            <div className="h-16 flex items-center px-2"></div>
            <div>
                {Object.values(path).map((item, index) => (
                    <Link
                        to={item.path}
                        key={index}
                        className={`px-6 w-full block py-1 font-normal text-md ${
                            location.pathname === item.path ? "text-blue-500" : ""
                        }`}
                    >
                        {item.name}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Sidebar;
