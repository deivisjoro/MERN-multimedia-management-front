// src/components/Home.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Home = () => {
  const { t } = useTranslation();

  return (
    <main className="ml-64 mt-16 p-8">
      <h1 className="text-4xl font-bold mb-4">{t('welcome')}</h1>
      <p>{t('home_description')}</p>
      <div className="mt-8">
        <Link to="/login" className="px-4 py-2 bg-blue-500 text-white rounded">{t('login')}</Link>
        <Link to="/signup" className="px-4 py-2 bg-green-500 text-white rounded ml-4">{t('signup')}</Link>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Información del Sistema</h2>
        <p>Este sistema permite gestionar contenido multimedia como imágenes, videos y documentos. Los usuarios pueden registrarse como Lectores o Creadores.</p>
        <ul className="list-disc list-inside mt-4">
          <li>Lectores: Pueden ver y buscar contenido.</li>
          <li>Creadores: Pueden crear y gestionar contenido multimedia.</li>
          <li>Administradores: Pueden gestionar usuarios y contenido.</li>
        </ul>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Enlaces a Secciones</h2>
        <nav className="flex flex-col space-y-2">
          <Link to="/videos" className="text-blue-500">Videos</Link>
          <Link to="/images" className="text-blue-500">Imágenes</Link>
          <Link to="/documents" className="text-blue-500">Documentos</Link>
        </nav>
      </div>
    </main>
  );
};

export default Home;
