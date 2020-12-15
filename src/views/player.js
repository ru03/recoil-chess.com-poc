import { Link, useParams } from "react-router-dom";
import { useRecoilValueLoadable } from "recoil";
import { PlayerCard } from "../components";

import { selectPlayerById } from '../selectors'
const Player = () => {
  const { username } = useParams();
  const player = useRecoilValueLoadable(selectPlayerById(username))

  console.log('player', player)

  switch (player.state) {
    case 'hasValue':
      return (
        <div>
          <Link to="/">Go Back</Link>
          <PlayerCard {...player.contents} />
        </div>
      );
    case 'loading':
      return <div>Loading...</div>;
    case 'hasError':
      throw player.contents;
    default: return;
  }
}

export default Player;