// src/components/Sidebar.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const { t } = useTranslation();

  return (
    <aside className="w-64 bg-gray-100 fixed top-16 left-0 h-full">
      <nav className="flex flex-col p-4">
        <Link to="/" className="mb-2 text-gray-800">{t('home')}</Link>
        <Link to="/videos" className="mb-2 text-gray-800">{t('videos')}</Link>
        <Link to="/images" className="mb-2 text-gray-800">{t('images')}</Link>
        <Link to="/documents" className="mb-2 text-gray-800">{t('documents')}</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
