// src/components/Documents.jsx
import React from 'react';
import { useTranslation } from 'react-i18next';

const Documents = () => {
  const { t } = useTranslation();

  return (
    <main className="ml-64 mt-16 p-8">
      <h1 className="text-2xl font-bold">{t('documents')}</h1>
      <p>{t('documents_description')}</p>
    </main>
  );
};

export default Documents;
