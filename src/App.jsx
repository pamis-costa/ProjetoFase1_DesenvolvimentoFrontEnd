import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/HomePage';
import SobrePage from './pages/SobrePage';
import CadastroPage from './pages/CadastroPage';
import ListPage from './pages/ListPage';
import './App.css';

function App() {
  const navigate = useNavigate();

  const [series, setSeries] = useState([
    { id: 1, titulo: 'La Casa de Papel', temporadas: 3, lancamento: '2020-05-20', diretor: 'Álex Pina', produtora: 'Netflix', categoria: 'Drama', assistido: '2021-05-10' },
    { id: 2, titulo: 'Breaking Bad', temporadas: 5, lancamento: '2008-01-22', diretor: 'Vince Gilligan', produtora: 'Sony Pictures', categoria: 'Drama', assistido: '2015-01-20'},
    {id: 3, titulo: 'Friends', temporadas: 10, lancamento: '1994-09-22', diretor: 'Kevin S. Bright', produtora: 'Warner Bros.', categoria: 'Comédia', assistido: '2010-10-10'}
  ]);
  const [serieEmEdicao, setSerieEmEdicao] = useState(null);

  const handleAddSerie = (novaSerie) => {
    setSeries([...series, { id: Date.now(), ...novaSerie }]);
    navigate('/lista');
  };

  const handleDeleteSerie = (idDaSerie) => {
    setSeries(series.filter((serie) => serie.id !== idDaSerie));
  };
  
  const handleEdit = (serie) => {
    setSerieEmEdicao(serie);
    navigate('/cadastrar');
  };
  
  const handleUpdateSerie = (serieAtualizada) => {
    setSeries(series.map((s) => (s.id === serieAtualizada.id ? serieAtualizada : s)));
    setSerieEmEdicao(null);
    navigate('/lista');
  };

  const cancelEdit = () => {
    setSerieEmEdicao(null);
  };

  return (
    <>
      <NavBar />
      <main className="container">
        {}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/sobre" element={<SobrePage />} />
          
          <Route 
            path="/cadastrar" 
            element={
              <CadastroPage 
                addSerie={handleAddSerie} 
                updateSerie={handleUpdateSerie}
                serieEmEdicao={serieEmEdicao}
                cancelEdit={cancelEdit}
              />
            } 
          />
          <Route 
            path="/lista" 
            element={
              <ListPage 
                series={series} 
                deleteSerie={handleDeleteSerie}
                editSerie={handleEdit}
              />
            } 
          />
        </Routes>
      </main>
    </>
  );
}

export default App;