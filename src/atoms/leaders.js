import { atom } from 'recoil';

const leaders = atom({
  key: 'leaders',
  default: [],
});

export default leaders;