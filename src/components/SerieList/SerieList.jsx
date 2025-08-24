import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SerieList.css';

function SerieList({ series, onDelete, onEdit }) {
  const navigate = useNavigate();

  return (
    <div className="serie-list-container">
      <ul className="serie-list">
        {series.map((serie) => (
          <li key={serie.id} className="serie-item">
            {}
            <span>
              - {serie.titulo} - {serie.temporadas} temporadas - {serie.lancamento} - {serie.diretor} - {serie.produtora} - {serie.categoria} - {serie.assistido}
            </span>
            <div className="buttons">
              <button onClick={() => onEdit(serie)}>Editar</button>
              <button onClick={() => onDelete(serie.id)}>Excluir</button>
            </div>
          </li>
        ))}
      </ul>
      <button className="add-button" onClick={() => navigate('/cadastrar')}>
        Cadastrar nova série
      </button>
    </div>
  );
}

export default SerieList;