import React, { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Logging in with Email: ${email}`);
        // Here you'd call your backend / API
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-[#0A192F]">
            <div className="w-full max-w-md p-8 space-y-6 bg-[#1E3A5F] rounded-2xl shadow-lg">
                {/* Title */}
                <h2 className="text-3xl font-bold text-center text-white">Login 🔑</h2>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-white">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-gray-500 rounded-lg bg-[#0A192F] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your email"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-gray-500 rounded-lg bg-[#0A192F] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your password"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-3 mt-4 text-lg font-semibold text-[#0A192F] bg-blue-400 rounded-lg shadow-md hover:bg-blue-500 transition duration-200"
                    >
                        Login
                    </button>
                </form>

                {/* Footer Link */}
                <p className="text-sm text-center text-gray-300">
                    Don’t have an account?{" "}
                    <Link to="/signup" className="font-semibold text-blue-400 hover:underline">
                        Sign Up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
