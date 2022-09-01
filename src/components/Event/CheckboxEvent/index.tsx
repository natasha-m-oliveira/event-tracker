import React from 'react';
import { IEvent } from '../../../interfaces/IEvent';

const CheckboxEvent: React.FC<{
  event: IEvent;
  aoAlterarStatus: (id: number) => void;
}> = ({ event, aoAlterarStatus }) => {
  const styles = [
    'far',
    'fa-2x',
    event.complete ? 'fa-check-square' : 'fa-square',
  ];

  return (
    <i
      className={styles.join(' ')}
      onClick={() => aoAlterarStatus(event.id!)}
    ></i>
  );
};

export default CheckboxEvent;
