import React from 'react';
import style from './Calendar.module.scss';
import ptBR from './localization/ptBR.json';
import Kalend, { CalendarView } from 'kalend';
import 'kalend/dist/styles/index.css';
import { useRecoilValue } from 'recoil';
import { eventListState } from '../../state/atom';

interface IKalendEvento {
  id?: number;
  startAt: string;
  endAt: string;
  summary: string;
  color: string;
}

const Calendar: React.FC = () => {
  const events = useRecoilValue(eventListState);
  const eventosKalend = new Map<string, IKalendEvento[]>();

  events.forEach((event) => {
    const key = event.start.toISOString().slice(0, 10);
    if (!eventosKalend.has(key)) {
      eventosKalend.set(key, []);
    }
    eventosKalend.get(key)?.push({
      id: event.id,
      startAt: event.start.toISOString(),
      endAt: event.end.toISOString(),
      summary: event.description,
      color: 'blue',
    });
  });
  return (
    <div className={style.container}>
      <Kalend
        events={Object.fromEntries(eventosKalend)}
        initialDate={new Date().toISOString()}
        hourHeight={60}
        initialView={CalendarView.WEEK}
        timeFormat={'24'}
        weekDayStart={'Monday'}
        calendarIDsHidden={['work']}
        language={'customLanguage'}
        customLanguage={ptBR}
      />
    </div>
  );
};

export default Calendar;
