import React from 'react';
import { IEvent } from '../../interfaces/IEvent';
import style from './Event.module.scss';
import CheckboxEvent from './CheckboxEvent';

const Event: React.FC<{
  event: IEvent;
  aoAlterarStatus: (id: number) => void;
  aoDeletarEvento: (id: number) => void;
}> = ({ event, aoAlterarStatus, aoDeletarEvento }) => {
  const styles = [style.event];

  if (event.complete) {
    styles.push(style.complete);
  }

  return (
    <div className={styles.join(' ')}>
      <CheckboxEvent event={event} aoAlterarStatus={aoAlterarStatus} />
      <div className='cards-info'>
        <h3 className={style.description}>
          {event.description} - {event.start.toLocaleDateString()}
        </h3>
      </div>
      <i
        className='far fa-times-circle fa-2x'
        onClick={() => aoDeletarEvento(event.id!)}
      ></i>
    </div>
  );
};

export default Event;
