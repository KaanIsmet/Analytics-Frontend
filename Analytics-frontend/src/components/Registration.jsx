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
            <h1>Registration</h1>
        </div>
    )
}