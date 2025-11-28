import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Search = () => {
    const [area, setArea] = useState('');
    const [result, setResult] = useState(null);

    const busData = [
        { area: "الجبيهة", busNumber: "B01" },
        { area: "صويلح", busNumber: "B05" },
        { area: "ماركا", busNumber: "B12" },
        { area: "طبربور", busNumber: "B08" },
        { area: "الجامعة الأردنية", busNumber: "B03" },
    ];

    const handleSearch = () => {
        const foundBus = busData.find(b => b.area === area);
        setResult(foundBus || { error: "لا توجد حافلات متاحة لهذه المنطقة حالياً" });
    };

    return (
        <div className="min-h-screen bg-gray-50 p-4 flex flex-col items-center">
            <header className="w-full max-w-4xl flex justify-between items-center py-6 mb-10">
                <h1 className="text-2xl font-bold text-gray-800">نظام حافلات الجامعة</h1>
                <img src={logo} alt="Logo" className="h-12 w-auto" />
            </header>

            <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">البحث عن الحافلة</h2>

                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2 text-right">
                        اختر منطقة السكن
                    </label>
                    <select
                        value={area}
                        onChange={(e) => setArea(e.target.value)}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-right bg-white"
                    >
                        <option value="">-- اختر المنطقة --</option>
                        {busData.map((b, index) => (
                            <option key={index} value={b.area}>{b.area}</option>
                        ))}
                    </select>
                </div>

                <button
                    onClick={handleSearch}
                    disabled={!area}
                    className={`w-full font-bold py-3 px-4 rounded-lg transition duration-300 shadow-md ${area ? 'bg-green-600 hover:bg-green-700 text-white' : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                        }`}
                >
                    البحث عن الباص
                </button>

                {result && (
                    <div className={`mt-8 p-6 rounded-xl text-center animate-fade-in ${result.error ? 'bg-red-100 text-red-800' : 'bg-blue-50 border-2 border-blue-200'}`}>
                        {result.error ? (
                            <p className="font-bold">{result.error}</p>
                        ) : (
                            <div>
                                <p className="text-gray-600 mb-2">رقم الباص المخصص لمنطقة {result.area}</p>
                                <p className="text-5xl font-extrabold text-blue-600">{result.busNumber}</p>
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Search;
