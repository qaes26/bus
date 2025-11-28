import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png';

const Login = () => {
    const [studentId, setStudentId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (studentId && password) {
            // Simulate login
            navigate('/search');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
            <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md transform transition-all hover:scale-105 duration-300">
                <div className="flex justify-center mb-8">
                    <img src={logo} alt="University Logo" className="h-24 w-auto object-contain" />
                </div>
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">تسجيل الدخول</h2>
                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2 text-right" htmlFor="studentId">
                            الرقم الجامعي
                        </label>
                        <input
                            id="studentId"
                            type="text"
                            value={studentId}
                            onChange={(e) => setStudentId(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-right"
                            placeholder="أدخل الرقم الجامعي"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-sm font-bold mb-2 text-right" htmlFor="password">
                            كلمة المرور
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-right"
                            placeholder="أدخل كلمة المرور"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md"
                    >
                        تسجيل الدخول
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
