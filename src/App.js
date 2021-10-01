import LiverpoolContainer from './components/LiverpoolContainer/liverpoolContainer';
import PokemonDetailsContainer from './components/PokemonDetailsContainer/pokemonDetailsContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import './components/LiverpoolContainer/LiverpoolContainer.scss';
import './components/SearchNav/SearchNav.scss';
import './components/CardsPokemon/cardsPokemon.scss';
import './components/PokemonDetailsContainer/PokemonDetailsContainer.scss';
import './antd.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
				<Switch>
          <Route
            exact path="/" component={props => <LiverpoolContainer {...props} />} />
          <Route
            exact path="/pokemon/infoPokemon" component={props => <PokemonDetailsContainer {...props} />} />
				</Switch>
			</BrowserRouter>
    </div>
  );
}

export default App;
