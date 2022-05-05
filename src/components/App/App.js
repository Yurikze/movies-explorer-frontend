import { useState } from 'react';
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
import Register from '../Register/Register';
import Login from '../Login/Login';
import SavedMovies from '../SavedMovies/SavedMovies';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);


  const hideHeaderPaths = ['/notfound', '/signup', '/signin'];
  const hideFooterPaths = ['/notfound', '/profile', '/signup', '/signin'];

  return (
    <div className="App">
      {useRouteMatch(hideHeaderPaths) ? null : <Header isLoggedIn={isLoggedIn} />}
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/saved-movies">
          <SavedMovies />
        </Route>
        <Route path="/notfound">
          <NotFound />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
        <Route path="/signin">
          <Login />
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
