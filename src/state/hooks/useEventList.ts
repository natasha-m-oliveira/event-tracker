import { useRecoilValue } from 'recoil';
import { filteredEventsState } from '../selectors';

const useEventList = () => {
  return useRecoilValue(filteredEventsState);
};

export default useEventList;
