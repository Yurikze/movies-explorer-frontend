import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/" exact>
          <Main />
        </Route>
      </Switch>
      <Footer />

    </div>
  );
}

export default App;
