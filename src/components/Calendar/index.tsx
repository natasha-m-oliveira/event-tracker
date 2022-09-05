import React from 'react';
import style from './Calendar.module.scss';
import ptBR from './localization/ptBR.json';
import Kalend, { CalendarEvent, CalendarView, OnEventDragFinish } from 'kalend';
import 'kalend/dist/styles/index.css';
import { useRecoilValue } from 'recoil';
import { eventListState } from '../../state/atom';
import useUpdateEvent from '../../state/hooks/useUpdateEvent';

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
  const updatedEvent = useUpdateEvent();

  const onEventDragFinish: OnEventDragFinish = (
    kalendPrevEvent: CalendarEvent,
    kalendUpdatedEvent: CalendarEvent
  ) => {
    const event = events.find(
      (event) => event.description === kalendUpdatedEvent.summary
    );
    if (event) {
      const modifiedEvent = {
        ...event,
      };
      modifiedEvent.start = new Date(kalendUpdatedEvent.startAt);
      modifiedEvent.end = new Date(kalendUpdatedEvent.endAt);

      updatedEvent(modifiedEvent);
    }
  };

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
        onEventDragFinish={onEventDragFinish}
      />
    </div>
  );
};

export default Calendar;
