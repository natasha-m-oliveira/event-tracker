import { atom } from 'recoil';
import { IEvent } from '../interfaces/IEvent';
import { IEventFilter } from '../interfaces/IEventFilter';
import { eventsAsync } from './selectors';

export const eventListState = atom<IEvent[]>({
  key: 'eventListState',
  default: eventsAsync,
});

export const eventFilterState = atom<IEventFilter>({
  key: 'eventFilterSate',
  default: {},
});
