import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [adminDropdownOpen, setAdminDropdownOpen] = useState(false);
  const [userType, setUserType] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userTypeFromStorage = localStorage.getItem('userType');
    setUserType(userTypeFromStorage);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const toggleAdminDropdown = () => {
    setAdminDropdownOpen(!adminDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userType');
    navigate('/login');
  };

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link to="/" className="text-2xl font-bold">Logo</Link>
        <input type="text" placeholder={t('search')} className="px-4 py-2 border rounded w-1/3" />
        <div className="flex items-center space-x-4">
          {userType ? (
            <>
              <button onClick={handleLogout} className="text-red-500">{t('logout')}</button>
              {userType === 'Admin' && (
                <div className="relative inline-block text-left">
                  <button 
                    onClick={toggleAdminDropdown} 
                    className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                  >
                    {t('admin')}
                  </button>
                  {adminDropdownOpen && (
                    <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                      <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                        <Link to="/admin/users" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{t('users')}</Link>
                        <Link to="/admin/contents" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{t('contents')}</Link>
                        <Link to="/admin/categories" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{t('categories')}</Link>
                        <Link to="/admin/topics" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{t('topics')}</Link>
                        <Link to="/admin/user-types" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{t('userTypes')}</Link>
                        <Link to="/admin/reaction-types" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">{t('reactionTypes')}</Link>
                      </div>
                    </div>
                  )}
                </div>
              )}
              {userType === 'Creador' && (
                <Link to="/upload" className="text-blue-500">{t('upload_content')}</Link>
              )}
              <Link to="/profile" className="text-blue-500">{t('profile')}</Link>
            </>
          ) : (
            <>
              <Link to="/login" className="text-blue-500">{t('login')}</Link>
              <Link to="/signup" className="text-blue-500">{t('signup')}</Link>
            </>
          )}
          <div className="relative inline-block text-left">
            <button 
              onClick={toggleDropdown} 
              className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              {i18n.language === 'en' ? 'English' : 'Español'}
            </button>
            {dropdownOpen && (
              <div className="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                  <button onClick={() => changeLanguage('en')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    English
                  </button>
                  <button onClick={() => changeLanguage('es')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Español
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
