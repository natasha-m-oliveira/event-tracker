import React, { useState } from 'react';
import useAddEvent from '../../state/hooks/useAddEvent';
import style from './Form.module.scss';

const Form: React.FC = () => {
  const addEvent = useAddEvent();
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [horaInicio, setHoraInicio] = useState('');
  const [endDate, setEndDate] = useState('');
  const [endTime, setEndTime] = useState('');

  const formatDate = (date: string, time: string) => {
    const dateText = date.slice(0, 10);
    return new Date(`${dateText}T${time}`);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const event = {
        description: description,
        start: formatDate(startDate, horaInicio),
        end: formatDate(endDate, endTime),
        complete: false,
      };
      addEvent(event);
      setDescription('');
      setStartDate('');
      setHoraInicio('');
      setEndDate('');
      setEndTime('');
    } catch (error) {
      alert(error);
    }
  };
  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <h3 className={style.title}>Novo evento</h3>

      <label>Descrição</label>
      <input
        type='text'
        name='description'
        id='description'
        className={style.input}
        onChange={(e) => setDescription(e.target.value)}
        placeholder='Descrição'
        value={description}
        autoComplete='off'
        required
      />

      <label>Data de início</label>
      <div className={style.inputWrapper}>
        <input
          type='date'
          name='startDate'
          className={style.input}
          onChange={(e) => setStartDate(e.target.value)}
          value={startDate}
          required
        />
        <input
          type='time'
          name='startTime'
          className={style.input}
          onChange={(e) => setHoraInicio(e.target.value)}
          value={horaInicio}
          required
        />
      </div>

      <label>Data de término</label>
      <div className={style.inputWrapper}>
        <input
          type='date'
          name='endDate'
          className={style.input}
          onChange={(e) => setEndDate(e.target.value)}
          value={endDate}
          required
        />
        <input
          type='time'
          name='endTime'
          className={style.input}
          onChange={(e) => setEndTime(e.target.value)}
          value={endTime}
          required
        />
      </div>

      <button className={style.button}>Salvar</button>
    </form>
  );
};

export default Form;
