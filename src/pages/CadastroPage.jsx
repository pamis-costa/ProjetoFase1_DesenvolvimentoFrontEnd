import React from 'react';
import SerieForm from '../components/SerieForm/SerieForm';

function CadastroPage({ addSerie, updateSerie, serieEmEdicao, cancelEdit }) {
  return (
    <div className="page-content">
      {}
      <h1>{serieEmEdicao ? 'Editar Série' : 'Cadastrar Série'}</h1>
      <SerieForm 
        onSave={serieEmEdicao ? updateSerie : addSerie}
        serie={serieEmEdicao}
        onCancel={cancelEdit}
      />
    </div>
  );
}

export default CadastroPage;