import React from 'react';
import { useTranslation } from 'react-i18next';

const GastoDiario = ({ dia, amount, diferencia }) => {
    const { t } = useTranslation();
  if (!dia) return null; // Si no se ha seleccionado ningún día, no se muestra nada

  return (
    <div className="container d-flex justify-content-center my-4 ">
    <div className="gasto-diario  p-4 rounded d-flex justify-content-between align-items-center" style={{ width: '100%', borderTop: '1px solid black' }}>
      <h6>{t('day_expense', { dia })}</h6>
      <p><strong>{t('expense', { amount })}</strong></p>
      {diferencia !== null && (
        <p>{t('difference', { diferencia: diferencia.toFixed(2) })}</p>
      )}
    </div>
  </div>
  );
};

export default GastoDiario;
