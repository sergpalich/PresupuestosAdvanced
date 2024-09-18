import React, { useState } from 'react';
import TotalGastosSemana from '../public/components/TotalGastosSemana';
import GastosBarChart from '../public/components/GastosBarChart';
import GastoDiario from '../public/components/GastoDiario';
import gastos from '../src/data/datos.json';
import { useTranslation } from 'react-i18next';




function App() {
  
  const [semanaActual, setSemanaActual] = useState(0);
  const [gastoSeleccionado, setGastoSeleccionado] = useState(null);
  const [diferencia, setDiferencia] = useState(null);
  const { i18n } = useTranslation();

  const handleBarClick = (gasto, index) => {
    setGastoSeleccionado(gasto);

    // Calcular diferencia con el día anterior si existe
    if (index > 0) {
      const gastoAnterior = gastos.semanas[semanaActual].gastos[index - 1].amount;
      const diferenciaPorcentual = ((gasto.amount - gastoAnterior) / gastoAnterior) * 100;
      setDiferencia(diferenciaPorcentual);
    } else {
      setDiferencia(null); // No hay día anterior si es el primer día
    }
  };

  const cambiarIdioma = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="App d-flex justify-content-center align-items-center" style={{ minHeight: '100vh', backgroundColor: '#f0f8ff' }}>


  <div className="p-4 rounded" style={{ width: '80%', backgroundColor: '#e0f7fa' }}>
  <div className="d-flex justify-content-end p-3">
        <button className="btn btn-link" onClick={() => cambiarIdioma('en')}>English</button>
        <button className="btn btn-link" onClick={() => cambiarIdioma('es')}>Español</button>
        <button className="btn btn-link" onClick={() => cambiarIdioma('ca')}>Català</button>
      </div>

    {/* Componente TotalGastosSemana */}
    <TotalGastosSemana semanaActual={semanaActual} setSemanaActual={setSemanaActual} />

    {/* Componente GastosBarChart */}
    <GastosBarChart semanaActual={semanaActual} onBarClick={handleBarClick} />

    {/* Componente GastoDiario para mostrar el gasto seleccionado */}
    <GastoDiario 
      dia={gastoSeleccionado?.dia} 
      amount={gastoSeleccionado?.amount} 
      diferencia={diferencia} 
    />
  </div>
</div>

  );
}

export default App;