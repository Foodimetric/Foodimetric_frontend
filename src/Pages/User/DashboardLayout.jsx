import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import DashboardNav from '../../Components/Nav/DashboardNav';
import DashboardHeader from '../../Components/Headers/DashboardHeader';
import PrivateRoute from '../../Context/PrivateRoute';
import { useAuth } from '../../Context/AuthContext';

const DashboardLayout = () => {
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(true);

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside
                className={`fixed inset-y-0 z-50 transition-transform duration-300 ${isSideMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    } md:translate-x-0 md:relative md:flex-shrink-0`}
            >
                <DashboardNav
                    isExpanded={isSideMenuOpen}
                    toggleSidebar={() => setIsSideMenuOpen(!isSideMenuOpen)}
                />
            </aside>

            {/* Main Content */}
            <div className="flex flex-col flex-1 w-full">
                {/* Header */}
                <DashboardHeader title="Dashboard" />

                {/* Outlet for Pages */}
                <main className="flex-1 overflow-y-auto p-4">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
