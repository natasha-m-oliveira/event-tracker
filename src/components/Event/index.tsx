import React from 'react';
import { IEvent } from '../../interfaces/IEvent';
import style from './Event.module.scss';
import CheckboxEvent from './CheckboxEvent';
import { useSetRecoilState } from 'recoil';
import { eventListState } from '../../state/atom';


const Event: React.FC<{
  event: IEvent;
}> = ({ event}) => {
  const styles = [style.event];
  const setEventList = useSetRecoilState<IEvent[]>(eventListState);
  const deleteEvent = () => {
    setEventList((oldList) => oldList.filter((oldEvent) => oldEvent.id !== event.id));
  }

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
        onClick={deleteEvent}
      ></i>
    </div>
  );
};

export default Event;
