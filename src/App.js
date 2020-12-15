import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import './App.css';
import Leaderboard from './views/leaderboard';
import Player from './views/player';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:username">
          <Player />
        </Route>
        <Route path="/">
          <div className="App">
            <Leaderboard />
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
