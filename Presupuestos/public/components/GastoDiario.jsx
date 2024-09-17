import React from 'react';

const GastoDiario = ({ dia, amount, diferencia }) => {
  if (!dia) return null; // Si no se ha seleccionado ningún día, no se muestra nada

  return (
    <div className="container d-flex justify-content-center my-4">
  <div className="gasto-diario bg-light p-4 rounded d-flex justify-content-between align-items-center" style={{ width: '100%' }}>
    <h6 className="me-3">Gasto de hoy:</h6>
    <p className="me-3"> {amount} €</p>
    {diferencia !== null && (
      <p className="me-3">Diferencia con ayer: {diferencia > 0 ? `+${diferencia.toFixed(2)}%` : `${diferencia.toFixed(2)}%`}</p>
    )}
  </div>
</div>
  );
};

export default GastoDiario;
