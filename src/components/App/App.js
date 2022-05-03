import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import './App.css';
import NotFound from '../NotFound/NotFound';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useRouteMatch } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Profile from '../Profile/Profile';


function App() {
  const hideHeaderPaths = ['/notfound'];
  const hideFooterPaths = ['/notfound', '/profile'];

  return (
    <div className="App">
      {useRouteMatch(hideHeaderPaths) ? null : <Header />}
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/notfound">
          <NotFound />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Redirect to="/notfound" />
      </Switch>
      {useRouteMatch(hideFooterPaths) ? null : <Footer />}
    </div>
  );
}

export default App;
