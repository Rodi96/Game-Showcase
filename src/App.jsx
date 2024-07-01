import { CustomRoutes } from './route/Routes';
import { GamesState } from './context/Games/GameState';


function App() {


  return (
    <GamesState>
      <CustomRoutes/>
    </GamesState>
  );
}

export default App;


