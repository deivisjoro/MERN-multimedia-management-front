// src/components/Videos.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const Videos = () => {
  const { t } = useTranslation();

  return (
    <main className="ml-64 mt-16 p-8">
      <h1 className="text-2xl font-bold">{t('videos')}</h1>
      <p>{t('videos_description')}</p>
    </main>
  );
};

export default Videos;
