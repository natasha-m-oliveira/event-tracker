import { useRecoilValue } from 'recoil';
import { eventListState } from '../atom';

const useEventList = () => {
  return useRecoilValue(eventListState);
};

export default useEventList;
