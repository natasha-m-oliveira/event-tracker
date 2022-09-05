import { useSetRecoilState } from 'recoil';
import { IEvent } from '../../interfaces/IEvent';
import { generateId } from '../../util';
import { eventListState } from '../atom';

const useAddEvent = () => {
  const setEventList = useSetRecoilState<IEvent[]>(eventListState);
  return (event: IEvent) => {
    const today = new Date();
    if (event.start < today) {
      throw new Error(
        'Eventos não podem ser cadastrados com data menor do que a atual.'
      );
    }
    event.id = generateId();
    return setEventList((oldList) => [...oldList, event]);
  };
};

export default useAddEvent;
