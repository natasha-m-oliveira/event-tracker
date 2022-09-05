import React from 'react';
import useEventList from '../../state/hooks/useEventList';
import Event from '../Event';
import Filter from '../Filter';
import style from './EventList.module.scss';

const EventList: React.FC<{
  aoFiltroAplicado: (data: Date | null) => void;
}> = ({ aoFiltroAplicado }) => {
  const events = useEventList();
  return (
    <section>
      <Filter aoFiltroAplicado={aoFiltroAplicado} />
      <div className={style.scroll}>
        {events.map((event) => (
          <Event
            event={event}
            key={event.id}
          />
        ))}
      </div>
    </section>
  );
};

export default EventList;
