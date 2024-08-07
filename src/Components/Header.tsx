import React from "react";

interface HeaderProps {
    toggleSidebar: () => void;
    sidebar: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar, sidebar }) => {
    return (
        <div className="h-16 flex items-center px-[3%] m-auto">
            <div className="flex items-center gap-4">
                <button className="flex items-center lg:hidden" onClick={toggleSidebar}>
                    <span className="material-symbols-outlined">{sidebar ? "close" : "menu"}</span>
                </button>
                <h1>LOGO</h1>
            </div>
        </div>
    );
};

export default Header;
