import React, { useEffect, useState } from 'react';
import Odometer from 'react-odometerjs';
import 'odometer/themes/odometer-theme-default.css';

const StatSection = () => {
    const [trustedCustomers, setTrustedCustomers] = useState(0);
    const [monthsFoundation, setMonthsFoundation] = useState(0);
    const [monthlyUsers, setMonthlyUsers] = useState(0);
    const [foodSearch, setFoodSearch] = useState(0);

    useEffect(() => {
        // Simulating an API call to get the statistics
        setTimeout(() => {
            setTrustedCustomers(276);
            setMonthsFoundation(6);
            setMonthlyUsers(50);
            setFoodSearch(500);
        }, 1000);
    }, []);

    return (
        <section id="stat" className="bg-cover bg-center bg-no-repeat md:bg-fixed bg-local">
            <div className="text-center py-20 md:pb-12 relative z-10 before:absolute before:left-0 before:top-0 before:bg-[#0008] before:-z-10 before:w-full before:h-full">
                <div className="wraper">
                    <div className="grid grid-cols-12 gap-x-4 justify-center">
                        <div className="md:col-span-3 col-span-6 col:col-span-12 md:mb-8">
                            <div>
                                <h3 className="text-7xl text-white font-heading-font lg:text-6xl sm:text-5xl flex items-center justify-center">
                                    <Odometer value={trustedCustomers} format="d" />+
                                </h3>
                                <p className="text-base text-white md:text-sm">Trusted By Customers</p>
                            </div>
                        </div>
                        <div className="md:col-span-3 col-span-6 col:col-span-12 md:mb-8">
                            <div>
                                <h3 className="text-7xl text-white font-heading-font lg:text-6xl sm:text-5xl flex items-center justify-center">
                                    <Odometer value={monthsFoundation} format="d" />{`>`}
                                </h3>
                                <p className="text-base text-white md:text-sm">Months of Foundation</p>
                            </div>
                        </div>
                        <div className="md:col-span-3 col-span-6 col:col-span-12 md:mb-8">
                            <div>
                                <h3 className="text-7xl text-white font-heading-font lg:text-6xl sm:text-5xl flex items-center justify-center">
                                    <Odometer value={monthlyUsers} format="d" />+
                                </h3>
                                <p className="text-base text-white md:text-sm">Monthly Users</p>
                            </div>
                        </div>
                        <div className="md:col-span-3 col-span-6 col:col-span-12 md:mb-8">
                            <div>
                                <h3 className="text-7xl text-white font-heading-font lg:text-6xl sm:text-5xl flex items-center justify-center">
                                    <Odometer value={foodSearch} format="d" />+
                                </h3>
                                <p className="text-base text-white md:text-sm">Food Searches</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatSection;
