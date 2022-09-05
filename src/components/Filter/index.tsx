import React, { useState } from 'react';
import style from './Filter.module.scss';

const Filter: React.FC<{ aoFiltroAplicado: (data: Date | null) => void }> = ({
  aoFiltroAplicado,
}) => {
  const [data, setData] = useState('');

  const submeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    if (!data) {
      aoFiltroAplicado(null);
      return;
    }
    aoFiltroAplicado(new Date(data));
  };

  return (
    <form className={style.filter} onSubmit={submeterForm}>
      <h3 className={style.title}>Filtrar por data</h3>
      <input
        type='date'
        name='date'
        className={style.input}
        onChange={(e) => setData(e.target.value)}
        placeholder='Por data'
        value={data}
      />

      <button className={style.button}>Filtrar</button>
    </form>
  );
};

export default Filter;
