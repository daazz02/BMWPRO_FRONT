import React from "react";

const Support: React.FC = () => {
    return (
        <div className="bg-[url('/src/assets/logg.jpg')] bg-no-repeat bg-cover bg-center bg-fixed min-h-screen text-white flex items-center justify-center">
            <div className="text-center px-4 sm:px-6 lg:px-8 w-full">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8">
                    Support Page
                </h1>

                <div className="flex flex-wrap gap-8 justify-center">
                    <div className="bg-gradient-to-r from-pink-800 to-blue-800 p-8 rounded-lg shadow-lg w-full sm:w-80 lg:w-96 text-center">
                        <h2 className="text-2xl font-bold mb-4">FAQ Section</h2>
                        <p className="text-lg">+380993456780</p>
                    </div>

                    <div className="bg-gradient-to-r from-purple-900 to-orange-800 p-8 rounded-lg shadow-lg w-full sm:w-80 lg:w-96 text-center">
                        <h2 className="text-2xl font-bold mb-4">Contact Support</h2>
                        <p className="text-lg">+380667845637</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;
