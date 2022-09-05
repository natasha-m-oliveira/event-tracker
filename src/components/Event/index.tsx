import React from 'react';
import { IEvent } from '../../interfaces/IEvent';
import style from './Event.module.scss';
import CheckboxEvent from './CheckboxEvent';
import useRemoveEvent from '../../state/hooks/useRemoveEvent';

const Event: React.FC<{
  event: IEvent;
}> = ({ event }) => {
  const styles = [style.event];
  const removeEvent = useRemoveEvent();

  if (event.complete) {
    styles.push(style.complete);
  }
  return (
    <div className={styles.join(' ')}>
      <CheckboxEvent event={event} />
      <div className='cards-info'>
        <h3 className={style.description}>
          {event.description} - {event.start.toLocaleDateString()}
        </h3>
      </div>
      <i
        className='far fa-times-circle fa-2x'
        onClick={() => removeEvent(event)}
      ></i>
    </div>
  );
};

export default Event;
