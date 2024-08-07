import { useState, useEffect } from "react";
import "./App.css";
import Header from "./Components/Header.tsx";
import Page1 from "./Components/Page1.tsx";
import Sidebar from "./Components/Sidebar.tsx";
import { Route, Routes } from "react-router-dom";

function App() {
    const [sidebar, setSidebar] = useState(false);

    const toggleSidebar = () => {
        setSidebar(!sidebar);
    };

    const cancelToggleSidebar = () => {
        setSidebar(false);
    };

    useEffect(() => {
        if (sidebar) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }
        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [sidebar]);

    return (
        <div className="flex">
            <div
                className={`w-64 h-[100vh] z-20 top-0 bg-white fixed transition-all lg:sticky ${
                    sidebar ? "left-[0]" : "left-[-101%]"
                }`}
            >
                <Sidebar />
            </div>
            <div className="w-full">
                <header className="bg-white sticky top-0 z-20">
                    <Header toggleSidebar={toggleSidebar} sidebar={sidebar} />
                </header>
                {sidebar && (
                    <div
                        className={`fixed bg-black h-[100vh] top-0 right-0 bottom-0 left-0 block lg:hidden ${
                            sidebar ? "z-10 opacity-10" : "z-[-100]"
                        }`}
                        onClick={cancelToggleSidebar}
                    ></div>
                )}
                <div className={`${sidebar ? "pointer-events-none" : ""}`}>
                    <Routes>
                        <Route path="/home" element={<Page1 />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;
