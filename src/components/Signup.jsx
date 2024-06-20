// src/components/Signup.jsx
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import axios from '../axiosConfig';
import { Link } from 'react-router-dom';

const Signup = () => {
  const { t } = useTranslation();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('Lector'); // Predeterminado a 'Lector'
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState(''); // 'success' or 'error'
  const [isRegistered, setIsRegistered] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/auth/register', {
        username,
        email,
        password,
        userType
      });
      setMessage(response.data.message || 'Registration successful!');
      setMessageType('success');
      setIsRegistered(true);
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          setMessage('User already exists.'); // Mensaje específico para el código de estado 400
        } else if (error.response.status === 500) {
          setMessage('Server error. Please try again later.'); // Mensaje específico para el código de estado 500
        } else {
          setMessage(error.response.data.message || 'Registration failed! Please try again.');
        }
      } else {
        setMessage('Registration failed! Please try again.');
      }
      setMessageType('error');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {isRegistered ? (
        <div className="text-center">
          <p className="text-green-500 mb-4">{message}</p>
          <Link to="/login" className="text-blue-500">{t('login')}</Link>
        </div>
      ) : (
        <>
          <h1 className="text-2xl font-bold mb-4">{t('signup')}</h1>
          <form onSubmit={handleSignup} className="w-1/3">
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                {t('username')}
              </label>
              <input
                type="text"
                id="username"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                {t('email')}
              </label>
              <input
                type="email"
                id="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                {t('password')}
              </label>
              <input
                type="password"
                id="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userType">
                {t('userType')}
              </label>
              <select
                id="userType"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
              >
                <option value="Lector">{t('Lector')}</option>
                <option value="Creador">{t('Creador')}</option>
              </select>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                {t('signup')}
              </button>
            </div>
          </form>
          {message && (
            <p className={`mt-4 ${messageType === 'success' ? 'text-green-500' : 'text-red-500'}`}>
              {message}
            </p>
          )}
        </>
      )}
    </div>
  );
};

export default Signup;
