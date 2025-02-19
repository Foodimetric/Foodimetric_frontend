import React from 'react';
import ProfileDropdown from '../Nav/ProfileDropdown';
import { useAuth } from '../../Context/AuthContext';
import { Link } from 'react-router-dom';

const SearchHeader = ({ title, setSelectedDb, selectedDb }) => {
    const { isAuthenticated, user } = useAuth()

    // State to keep track of the selected database
    // Function to update the selected database
    const handleSelectDb = (db) => {
        setSelectedDb(db);
    };


    return (
        <div className="fixed right-0 top-0 left-60 h-16 bg-white z-10 font-base-font">
            <div className="flex items-center flex-shrink-0 h-16 px-8 border-b border-gray-300 xs:px-1 md:px-8">
                <h1 className="text-xl font-medium text-[#147e03] font-heading-font xs:text-base sm:text-xl">{title}</h1>
                <label className={`flex items-center justify-center h-10 px-4 ml-auto xs:text-xs sm:text-sm xs:px-1 sm:px-4 text-sm font-medium rounded cursor-pointer space-x-1`}>
                    <input
                        type="radio"
                        name="db"
                        value="nigeria"
                        checked={selectedDb === 'nigeria'}
                        onChange={() => handleSelectDb('nigeria')}
                        className=""
                    />
                    <span className='xs:hidden sm:block'>Nigeria DB</span>
                    <img alt="flag" aria-label="Nigeria" title="Nigeria" className='xs:block  sm:hidden' src="data:image/png;base64,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"></img>
                </label>

                {user?.category !== 0 &&
                    <label className={`flex items-center justify-center h-10 px-4 ml-2 xs:ml-0 sm:ml-2 xs:text-xs sm:text-sm xs:px-1 sm:px-4 text-sm font-medium rounded cursor-pointer`}>
                        <input
                            type="radio"
                            name="db"
                            value="west_africa"
                            checked={selectedDb === 'west_africa'}
                            onChange={() => handleSelectDb('west_africa')}
                            className=""
                        />
                        <span className='xs:hidden sm:block'> West-Africa DB</span>
                        <img alt='west africa flag' className='xs:block  sm:hidden' aria-label="West Africa " title="West Africa " src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAADuElEQVR4nO3XTWgcZRzH8f/4RIna7EuagyBeRISiICKFNG67TZPdzczse3bai6Un0ZPgQUUQ99KDmuymMYlgYpto4jZZYpPUvKex3kTowYsPFJWCtIKanXnmZWfS0vKX2SDUKu1udnfWQ77wuwwsfHiGGXYA9trrn6H/VDPjpYAWSr2rBpMjLJicNATpCWhkmnD8NZWXLmi8NKXxvQWtJ4VqqHdnwSTqgcTzDcMZ4vEXVF66rvESanwK78Wp9rrj6yyYPPFru/To379jXeGDzCd66w7UeOnKfXGBRGmsO46sK64ox2Jvy91xn9IZuS0fjW4rneF5xS++yvyipPnDbTXFsaDUqvESKxOHrCuG7Ji9KCqd9iKoHI2g4g+XJh8WZ2qG03okn8anrtUMd0RE+Yhg3ngp/FgtcH61R7pZW5yI8mEBlQ6hswbA1NV64GSfgAUf/8PdD9PugHxqsB442cdj4eUeLBwKna4OKJw4UDdcRwmoK36/Z9dANZQ8WTdcRwgLh4K41R44tWvg9nrTprVBqLVGqLVKqLVCqLVMqLlEqPk1oeZFQosLOzPmCTXmCDVmCdXt5QnVZwjVpwnVc4SqOULZFKFsklDli6bS5IkmKo82Z3cP/BbS25cBrW8ArU1AawPQXAc01wDNVcDiCmBxGdBYAjQWAY2LgPoCoD4PqM8BahcAta8A1VlANQ+ozgCyaQ7ZeQ6VHIfKlxzKk9wqVJN1CV43N+F2PXDKVAm4AtVWXIOEuQ6/27jiKmjGChSNJfhZX4QxfRF+qQKHhQluGGoRrsHjxWVoxyvw8N3X2SJ4tXnI6XPwY6U4+XMOlXOQBCfSF+C5SnHyOKdfG4dmR4DFPDxZEW6Cw8I57jtwKrwMTWwWzLJx4yXgT+BkLA+ZCnD451nuDhuDVseAch7cyjT3Wzm4rbMcbn3G4dYYvAFOpuS4ofJxHP4xyl2/8SlU/9+w3NpGku/vH0mgvdbhOLYO2Yuh92N7UfQORtFzJrKzgTC67WXEdxwD7h9OfF8RLiuiq18YdQTXNhR/tnyceNOdFc67+8VJVybyjDPAT3pfrODkrkI6/RA4GgLnHYpvlHNb3RkRXRnhPWeBAOAdiT3lGYxZD8aJ2NInvAmNyDMYXX7Ayd1pyQivNARn5zkTTd/v5Fz9Arr6hA+hUbmz4tOegfCt/8aJIVc/H4C09Ag0Mk82/MG/cH3CLchU+S1cy1N033NbW5x6IZebOyO81ZIRT+/7SEzsGxAO2K+hRpv2gv9rfwHwbfKLVAu+WAAAAABJRU5ErkJggg=="></img>
                    </label>}
                <div className="flex items-center xs:hidden sm:block">
                    {isAuthenticated ? (
                        <div className="">
                            <ProfileDropdown />
                        </div>
                    ) : (
                        <Link
                            to="/register"
                            className="block theme-btn py-[10px] px-[25px] bg-[#1f1e1e]  md:block  before:hidden xs:text-sm sm:text-base"
                        >
                            Register
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}

export default SearchHeader;
