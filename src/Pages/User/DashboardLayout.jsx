import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router';
import DashboardNav from '../../Components/Nav/DashboardNav';
import DashboardHeader from '../../Components/Headers/DashboardHeader';


const DashboardLayout = () => {
    const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);

    return (
        <div className={`flex h-screen bg-gray-100 ${isSideMenuOpen ? 'overflow-hidden' : ''}`}>
            <DashboardNav isSideMenuOpen={isSideMenuOpen} />
            <div className="flex flex-col flex-1 w-full overflow-y-auto">
                <DashboardHeader />
                <div className="grid mb-4 pb-10 px-8 mx-4 rounded-3xl bg-gray-100 border-4 border-[#ffba08]">
                    <div className="grid grid-cols-12 gap-6">
                        <div className="grid grid-cols-12 col-span-12 gap-6 xxl:col-span-9">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardLayout;