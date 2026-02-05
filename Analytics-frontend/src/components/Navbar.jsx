import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav className="rounded-lg bg-cyan-400">
            <div className="max-w-10xl mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Left side: Logo + Navigation Links */}
                    <div className="flex items-center space-x-8">
                        
                        <div className="flex items-center space-x-8">  {/* Increased spacing */}
                            <Link to="/" className="text-lg text-white hover:text-gray-700" scroll={true}>  {/* Changed to black */}
                                Stock Nest
                            </Link>
                            <Link to="/my-profile" className="text-lg text-white hover:text-gray-700">
                                My Profile
                            </Link>
                            <Link to="/trending" className="text-lg text-white hover:text-gray-700">
                                Trending
                            </Link>
                            <Link to="/market" className="text-lg text-white hover:text-gray-700">
                                Market
                            </Link>
                            <Link to="/news" className="text-lg text-white hover:text-gray-700">
                                News
                            </Link>
                            <Link to="/notifications" className="text-lg text-white hover:text-gray-700">
                                Notifications
                            </Link>
                        </div>
                    </div>
                    
                    {/* Right side: Sign Up Button */}
                    <Link 
                        to="/login"
                        className="signup-button rounded-sm py-2 px-4 hover:bg-cyan-500 hover:text-white"
                    >
                        Sign in
                    </Link>
                </div> 
            </div>
        </nav>
    );
}