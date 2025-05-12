import React, { useState } from "react";
import axios from "axios";

const Login: React.FC = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");
    const [isSuccess, setIsSuccess] = useState<boolean | null>(null);

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:9090/api/auth/register", {
                username,
                password,
            });

            // Успех: можно сохранить токен и перейти на другую страницу
            const token = response.data.token;
            localStorage.setItem("token", token);
            setMessage("Login successful!");
            setIsSuccess(true);
        } catch (error: unknown) {
            if (axios.isAxiosError(error)) {
                const errorMessage = error.response?.data?.error || "Invalid credentials";
                setMessage("Login failed: " + errorMessage);
            } else if (error instanceof Error) {
                setMessage("Login failed: " + error.message);
            } else {
                setMessage("Login failed: Unknown error");
            }
            setIsSuccess(false);
        }
    };

    return (
        <div className="relative min-h-screen flex items-center justify-center bg-gray-900">
            <div className="absolute inset-0 bg-[url('/src/assets/register-bg.jpg')] bg-no-repeat bg-cover bg-center z-0"></div>

            <div className="relative z-10 w-full max-w-lg h-auto bg-white p-8 rounded-md shadow-lg">
                <h1 className="text-center text-4xl font-bold mb-4 text-gray-800">Login</h1>
                <form onSubmit={handleLogin}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700 font-medium">
                            Username:
                        </label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700 font-medium">
                            Password:
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full h-12 bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-600 transition duration-300"
                    >
                        Login
                    </button>
                </form>
                {message && (
                    <div className="mt-4 text-center">
                        <p className={`text-lg ${isSuccess ? "text-green-500" : "text-red-500"}`}>
                            {message}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Login;
