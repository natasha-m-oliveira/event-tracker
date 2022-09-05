import { useSetRecoilState } from 'recoil';
import { IEvent } from '../../interfaces/IEvent';
import { eventListState } from '../atom';

const useUpdateEvent = () => {
  const setEventList = useSetRecoilState<IEvent[]>(eventListState);
  return (event: IEvent) => {
    return setEventList((oldList) => {
      const index = oldList.findIndex((oldEvent) => oldEvent.id === event.id);
      return [...oldList.slice(0, index), event, ...oldList.slice(index + 1)];
    });
  };
};

export default useUpdateEvent;
