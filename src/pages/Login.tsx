import React from "react";

const Login: React.FC = () => {
  return (
      <div className="relative min-h-screen flex items-center justify-center bg-gray-900">
        <div className="absolute inset-0 bg-[url('/src/assets/log.jpg')] bg-no-repeat bg-cover bg-center z-0"></div>

        <div className="relative z-10 w-full max-w-lg h-90 bg-white p-8 rounded-md shadow-lg">
          <h1 className="text-center text-4xl font-bold mb-4 text-gray-800">Login</h1>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-medium">Name:</label>
              <input
                  type="text"
                  id="name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="block text-gray-700 font-medium">Password:</label>
              <input
                  type="password"
                  id="password"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button
                type="submit"
                className="w-full h-50 bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-600 transition duration-300 "
            >
              Login
            </button>
          </form>
        </div>
      </div>
  );
};

export default Login;
