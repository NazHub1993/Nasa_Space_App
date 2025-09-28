import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUpPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            alert("Passwords do not match ❌");
            return;
        }
        alert(`Signing up with Name: ${name}, Email: ${email}`);
        // Here you'd call your backend / API
    };

    return (
        <div className="flex items-center justify-center  bg-[#0A192F]">
            <div className="w-full max-w-md p-8 space-y-6 bg-[#1E3A5F] rounded-2xl shadow-lg fixed top-25">
                {/* Title */}
                <h2 className="text-3xl font-bold text-center text-white">Sign Up ✨</h2>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div>
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-gray-500 rounded-lg bg-[#0A192F] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter your full name"
                        />
                    </div>

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
                            placeholder="Create a password"
                        />
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-white">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            className="w-full px-4 py-2 border border-gray-500 rounded-lg bg-[#0A192F] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Confirm your password"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-3 mt-4 text-lg font-semibold text-[#0A192F] bg-blue-400 rounded-lg shadow-md hover:bg-blue-500 transition duration-200"
                    >
                        Sign Up
                    </button>
                </form>

                {/* Footer Link */}
                <p className="text-sm text-center text-gray-300">
                    Already have an account?{" "}
                    <Link to="/login" className="font-semibold text-blue-400 hover:underline">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignUpPage;
