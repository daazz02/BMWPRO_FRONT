import React from "react";

const Support: React.FC = () => {
    return (
        <div className="bg-[url('/src/assets/Support_ban.png')] bg-no-repeat bg-cover bg-center bg-fixed min-h-screen text-white">
            <div className="mt-[63px] pt-5">
                <div className="text-center px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                        Support Page
                    </h1>
                    <p className="text-sm sm:text-base lg:text-lg mb-8">
                        We're here to help you with any questions or issues!
                    </p>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg transition-transform transform hover:scale-105">
                        Contact Us
                    </button>
                </div>
                <div className="flex flex-wrap gap-6 justify-center mt-10">
                    <div className="bg-gray-800 p-4 rounded-lg shadow-lg max-w-sm">
                        <h2 className="text-xl font-bold mb-2">FAQ Section</h2>
                        <p className="text-sm">Find answers to the most common questions here.</p>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg shadow-lg max-w-sm">
                        <h2 className="text-xl font-bold mb-2">Contact Support</h2>
                        <p className="text-sm">Reach out to our team directly via email or phone.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;
