// src/components/Images.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const Images = () => {
  const { t } = useTranslation();

  return (
    <main className="ml-64 mt-16 p-8">
      <h1 className="text-2xl font-bold">{t('images')}</h1>
      <p>{t('images_description')}</p>
    </main>
  );
};

export default Images;
