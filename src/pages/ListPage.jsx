import React from 'react';
import SerieList from '../components/SerieList/SerieList';

function ListPage({ series, deleteSerie, editSerie }) {
  return (
    <div className="page-content">
      <h1>Lista de séries</h1>
      <SerieList 
        series={series} 
        onDelete={deleteSerie}
        onEdit={editSerie}
      />
    </div>
  );
}

export default ListPage;