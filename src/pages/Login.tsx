import React, { useState } from "react";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:9090/api/v1/users/save_user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }), // Добавляем email для отправки
      });

      if (response.ok) {
        const data = await response.text();
        console.log("Response from server:", data);
      } else {
        console.error("Error:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
      <div className="relative min-h-screen flex items-center justify-center bg-gray-900">

        <div className="absolute inset-0 bg-[url('/src/assets/Login_ban.png')] bg-no-repeat bg-cover bg-center z-0"></div>


        <div className="relative z-10 w-96 bg-white p-8 rounded-md shadow-lg">
          <h1 className="text-center text-4xl font-bold mb-4 text-gray-800">Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-medium">Email:</label>
              <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={handleEmailChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-medium">Password:</label>
              <input
                  type="password"
                  id="password"
                  value={password}
                  onChange={handlePasswordChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>
  );
};

export default Login;
