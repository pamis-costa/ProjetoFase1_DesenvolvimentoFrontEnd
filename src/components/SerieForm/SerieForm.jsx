import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './SerieForm.css';

function SerieForm({ onSave, serie, onCancel }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    titulo: '', temporadas: '', lancamento: '', diretor: '',
    produtora: '', categoria: '', assistido: '',
  });

  const isEditing = !!serie; 

  useEffect(() => {
    if (isEditing) {
      setFormData(serie);
    }
  }, [serie, isEditing]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData); 
  };

  const handleCancel = () => {
    onCancel();
    navigate('/lista'); 
  }

  return (
    <form onSubmit={handleSubmit} className="serie-form">
      <div className="form-group">
        <label htmlFor="titulo">Título:</label>
        <input type="text" id="titulo" name="titulo" value={formData.titulo} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="temporadas">Número de Temporadas:</label>
        <input type="number" id="temporadas" name="temporadas" value={formData.temporadas} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="lancamento">Data de Lançamento:</label>
        <input type="date" id="lancamento" name="lancamento" value={formData.lancamento} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="diretor">Diretor:</label>
        <input type="text" id="diretor" name="diretor" value={formData.diretor} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="produtora">Produtora:</label>
        <input type="text" id="produtora" name="produtora" value={formData.produtora} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="categoria">Categoria:</label>
        <input type="text" id="categoria" name="categoria" value={formData.categoria} onChange={handleChange} required />
      </div>
      <div className="form-group">
        <label htmlFor="assistido">Data em que assistiu:</label>
        <input type="date" id="assistido" name="assistido" value={formData.assistido} onChange={handleChange} required />
      </div>

      <div className="form-buttons">
        <button type="submit">{isEditing ? 'Atualizar' : 'Cadastrar'}</button>
        {isEditing && (
          <button type="button" onClick={handleCancel}>Cancelar</button>
        )}
      </div>
    </form>
  );
}

export default SerieForm;