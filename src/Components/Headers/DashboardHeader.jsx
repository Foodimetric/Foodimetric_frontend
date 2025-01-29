import ProfileDropdown from "../Nav/ProfileDropdown";

const DashboardHeader = ({ title = "Dashboard" }) => {
    return (
        <header className="flex items-center justify-between bg-white px-6 py-4 w-full">
            {/* Page Title */}
            <h1 className="text-2xl font-semibold text-[#147E03]">{title}</h1>

            {/* Search Bar */}
            {/* <div className="relative flex-grow mx-6 hidden sm:block">
                <input
                    type="text"
                    placeholder="Search..."
                    className="w-full py-2 px-4 text-gray-600 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#F78914] focus:border-[#F78914]"
                />
                <button className="absolute inset-y-0 right-2 flex items-center text-gray-400 hover:text-[#F78914]">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M10 14l2-2m0 0l2-2m-2 2v6m0-6V4"
                        />
                    </svg>
                </button>
            </div> */}

            {/* User Actions */}
            <div className="flex items-center space-x-4">
                {/* Notification Button */}
                {/* <button
                    className="relative p-2 text-white bg-[#147E03] rounded-full hover:bg-[#F78914] focus:outline-none"
                    aria-label="Notifications"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V4a2 2 0 10-4 0v1.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0a3.001 3.001 0 01-6 0m6 0H9"
                        />
                    </svg>
                    <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                </button> */}

                {/* User Avatar */}
                <ProfileDropdown />
            </div>
        </header>
    );
};

export default DashboardHeader;