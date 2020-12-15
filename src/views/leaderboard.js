import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { leadersState } from '../atoms';
import { LeaderTable } from '../components';

const Leaderboard = () => {
  const [leaders, setLeaders] = useRecoilState(leadersState);

  useEffect(() => {
    fetchLeaders()
  }, []);

  async function fetchLeaders() {
    const res = await fetch('https://api.chess.com/pub/leaderboards');
    const { live_blitz } = await res.json();
    setLeaders(live_blitz);
  }

  return (
    <div className="container mx-auto">
      <h1>LEADERS</h1>
      <div className="flex justify-center">
        {
          leaders.length > 0 && <LeaderTable titles={['Rank', 'Username', 'Title']} data={leaders} />
        }
      </div>
    </div>
  );
}

export default Leaderboard;