import React from 'react';
const Nutrient = () => {
    return (
        <main class="py-8 max-h-full">
            <div class="bg-white p-8 max-h-full">
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
                    <div className="mb-4">
                        <label htmlFor='nutrient' className='mb-2 block'>Nutrients:</label>
                        <select id="nutrient" className="h-12 block w-full p-2 border border-gray-300 rounded shadow-sm focus:border-gary-200 outline-none focus:outline-none">
                            <option value="" default>Select a nutrient</option>
                            <option value="protein">Protein</option>
                            <option value="carbs">Carbohydrates</option>
                            <option value="fats">Fats</option>
                            <option value="vitamins">Vitamins</option>
                            <option value="minerals">Minerals</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor='weight' className='mb-2 block'>Weight:</label>
                        <input type="number" name="weight" id="weight" placeholder="Weight" class="w-full p-2 text-sm text-black border border-gray-200 outline-none focus:outline-none bg-transparent h-12" />
                    </div>
                    <div className="w-3/4 mx-auto mt-8">
                        <button type="submit" className=" h-[45px] bg-[#ffba08] text-[16px] p-[10px_20px] text-center flex
                                        items-center mt-[20px] w-full
                                        justify-center capitalize text-[#fff]
                                        border-[#ffba08] border-[2px] transition-all hover:bg-transparent hover:text-[#ffba08]
                                    ">
                            Proceed
                        </button>
                    </div>
                </form>
                <div className='mt-12'>
                    <h2 className="text-[30px] mb-[10px] font-heading-font font-semibold">Result</h2>
                </div>
            </div>
        </main>
    );
}

export default Nutrient;