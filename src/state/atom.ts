import { atom } from 'recoil';
import { IEvent } from '../interfaces/IEvent';

export const eventListState = atom<IEvent[]>({
  key: 'eventListState',
  default: [
    {
      description: 'Estudar React',
      start: new Date('2022-09-05T09:00'),
      end: new Date('2022-09-05T13:00'),
      complete: false,
      id: 1642342747,
    },
    {
      description: 'Estudar Recoil',
      start: new Date('2022-09-06T09:00'),
      end: new Date('2022-09-06T11:00'),
      complete: false,
      id: 1642342959,
    },
  ],
});
