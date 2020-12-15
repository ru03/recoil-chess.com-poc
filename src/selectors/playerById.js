import { selectorFamily } from 'recoil';
import { leadersState } from '../atoms';

const playerById = selectorFamily({
  key: 'selectPlayerById',
  get: (username) => async ({ get }) => {
    const players = get(leadersState);
    const player = players.find(player => player.username === username);
    if (player) {
      return player;
    }

    const res = await fetch(`https://api.chess.com/pub/player/${username}`);
    const data = res.json();
    return data;
  }
});

export default playerById;