import React from 'react';
import gastos from '../../src/data/datos.json';
import './TotalGastosSemana.css';  // Importamos el archivo CSS
import { useTranslation } from 'react-i18next';

const TotalGastosSemana = ({ semanaActual, setSemanaActual }) => {
  const semana = gastos.semanas[semanaActual];

  const calcularTotalSemana = () => {
    return semana.gastos.reduce((total, gasto) => total + gasto.amount, 0);
  };

  const avanzarSemana = () => {
    if (semanaActual < gastos.semanas.length - 1) {
      setSemanaActual(semanaActual + 1);
    }
  };

  const retrocederSemana = () => {
    if (semanaActual > 0) {
      setSemanaActual(semanaActual - 1);
    }
  };

  return (
    <div className="container d-flex justify-content-end my-4">
      <div className="total-gastos-semana justify-content-between align-items-end">
        <div className="d-flex justify-content-between align-items-center">
          <div className="text-start">
          <h6>Balance total: </h6>
          <div>{calcularTotalSemana()} €</div>
          </div>
          <div className="d-flex justify-content-right align-items-end">
            <button className="btn btn-secondary mx-2" onClick={retrocederSemana} disabled={semanaActual === 0}>
              ← 
            </button>
            <button className="btn btn-secondary mx-2" onClick={avanzarSemana} disabled={semanaActual === gastos.semanas.length - 1}>
               →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TotalGastosSemana;

