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
                            <Link href="/" className="text-lg text-black hover:text-gray-700" scroll={true}>  {/* Changed to black */}
                                Stock Nest
                            </Link>
                            <Link href="/my-profile" className="text-lg text-black hover:text-gray-700">
                                My Profile
                            </Link>
                            <Link href="/trending" className="text-lg text-black hover:text-gray-700">
                                Trending
                            </Link>
                            <Link href="/market" className="text-lg text-black hover:text-gray-700">
                                Market
                            </Link>
                            <Link href="/news" className="text-lg text-black hover:text-gray-700">
                                News
                            </Link>
                            <Link href="/notifications" className="text-lg text-black hover:text-gray-700">
                                Notifications
                            </Link>
                        </div>
                    </div>
                    
                    {/* Right side: Sign Up Button */}
                    <Link 
                        href="/signup"
                        className="signup-button rounded-sm py-2 px-4 hover:bg-cyan-500 hover:text-white"
                    >
                        Sign up
                    </Link>
                </div> 
            </div>
        </nav>
    );
}