import React from 'react';
import { IEvent } from '../../../interfaces/IEvent';
import useUpdateEvent from '../../../state/hooks/useUpdateEvent';

const CheckboxEvent: React.FC<{
  event: IEvent;
}> = ({ event }) => {
  const styles = [
    'far',
    'fa-2x',
    event.complete ? 'fa-check-square' : 'fa-square',
  ];
  const updatedEvent = useUpdateEvent();

  const changeState = () => {
    const modifiedEvent = { ...event };
    modifiedEvent.complete = !modifiedEvent.complete;

    updatedEvent(modifiedEvent);
  };
  return <i className={styles.join(' ')} onClick={changeState}></i>;
};

export default CheckboxEvent;
