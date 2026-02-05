import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import logo from '../assets/StockLogo.svg';

export default function Registration() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isRegistered, setIsRegistered] = useState(false);
    const [isForgotPassword, setIsForgotPassword] = useState(false);
    const [isRegistration, setIsRegistration] = useState(false);
    const [isLogin, setIsLogin] = useState(false);
    const [isLogout, setIsLogout] = useState(false);
    const [isProfile, setIsProfile] = useState(false);

    return (
        <div className="">
      
    
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-sm">
          {/* Logo and Title */}
          <div className="text-center mb-8">
            <img src={logo} alt="logo" className="w-20 h-20 mx-auto my-4" />
            <h1 className="text-3xl font-light text-white tracking-wide">
              Stock Nest
            </h1>
          </div>
          
          {/* Form */}
          <div className="space-y-4">
            {/* Email Input */}
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-md bg-white/80 placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />

            {/* Password Input */}
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 rounded-md bg-white/80 placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />

            {/* Forgot Password Link */}
            <div className="text-right">
              <a href="#" className="text-sm text-red-400 hover:text-red-300">
                Forgot Password?
              </a>
            </div>

            {/* Login Button */}
            <button className="w-full py-3 rounded-full bg-cyan-400 text-gray-800 font-medium hover:bg-cyan-500 transition-colors">
              Login
            </button>

            {/* Divider */}
            <div className="text-center text-white/70 text-sm">
              Don't have an account?
            </div>

            {/* Registration Button */}
            <button className="w-full py-3 rounded-full bg-cyan-500 text-white font-medium hover:bg-cyan-600 transition-colors" onClick={NavigateToRegistration}>
              Registration
            </button>
          </div>
        </div>
      </div>
    </div>
    )
}