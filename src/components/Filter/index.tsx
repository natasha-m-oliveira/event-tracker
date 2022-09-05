import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { IEventFilter } from '../../interfaces/IEventFilter';
import { eventFilterState } from '../../state/atom';
import style from './Filter.module.scss';

const Filter: React.FC = () => {
  const [date, setDate] = useState('');
  const setEventFilter = useSetRecoilState<IEventFilter>(eventFilterState)

  const submeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault();
    const filter: IEventFilter = {};
    if (date) {
      filter.date = new Date(date)
    } else {
      filter.date = null;
    }
    setEventFilter(filter);
  };

  return (
    <form className={style.filter} onSubmit={submeterForm}>
      <h3 className={style.title}>Filtrar por data</h3>
      <input
        type='date'
        name='date'
        className={style.input}
        onChange={(e) => setDate(e.target.value)}
        placeholder='Por data'
        value={date}
      />

      <button className={style.button}>Filtrar</button>
    </form>
  );
};

export default Filter;
