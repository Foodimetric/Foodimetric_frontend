import React from 'react';
import ProceedButton from '../../Components/Buttons/ProceedButton'

export const Food = () => {
    const handleProceed = (e) => {
        e.preventDEfault();
        alert('Proceed button clicked');
    };

    return (
        <main class="py-8" >
            <div class="bg-white p-8 min-h-screen">
                <form className='w-full md:w-3/4 mx-auto'>
                    <div>
                        <label htmlFor='food' className='mb-2 block'>Search Food:</label>
                        <div class="bg-white rounded flex items-center w-full p-2 shadow-sm border border-gray-200 mb-4 ">
                            <button class="outline-none focus:outline-none">
                                <svg class="w-5 text-gray-600 h-5 cursor-pointer" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </button>
                            <input type="search" name="food" id="food" placeholder="Search Food" class="w-full pl-3 text-sm text-black outline-none focus:outline-none bg-transparent h-8" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor='weight' className='mb-2 block'>Weight:</label>
                        <input type="number" name="weight" id="weight" placeholder="Weight" class="w-full p-2 text-sm text-black border border-gray-200 outline-none focus:outline-none bg-transparent h-12" />
                    </div>
                    <div className="w-full mx-auto mt-8">
                        <ProceedButton color="#ffba08" type="button" auth="authorized" onClick={handleProceed} width="100%" />
                    </div>
                </form>
                <div className='mt-12'>
                    <h2 className="text-[30px] mb-[10px] font-heading-font font-semibold">Result</h2>
                </div>
            </div>
        </main>
    );
}