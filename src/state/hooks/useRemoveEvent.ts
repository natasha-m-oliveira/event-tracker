import { useSetRecoilState } from 'recoil';
import { IEvent } from '../../interfaces/IEvent';
import { eventListState } from '../atom';

const useRemoveEvent = () => {
  const setEventList = useSetRecoilState<IEvent[]>(eventListState);
  return (event: IEvent) => {
    setEventList((oldList) =>
      [...oldList.filter((oldEvent) => oldEvent.id !== event.id)]
    );
  };
};

export default useRemoveEvent;
