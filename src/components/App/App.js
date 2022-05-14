import { useState, useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import NotFound from '../NotFound/NotFound';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import SavedMovies from '../SavedMovies/SavedMovies';
import { CurrentUserContext, user } from '../../contexts/CurrentUserContext';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import { moviesApi } from '../../utils/MoviesApi';
import './App.css';
import { mainApi } from '../../utils/MainApi';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState('');
  const [currentUser, setCurrentUser] = useState(user);
  const history = useHistory();

  const fetchMovies = async () => {
    try {
      const movies = await moviesApi.getMovies();
      return movies;
    } catch (error) {
      console.log(error);
      setError(error);
    }
  };

  const filterMovies = (filter, movies) => {
    const filteredMovies = movies.filter((movie) =>
      movie.nameRU.toLowerCase().includes(filter.toLowerCase().trim()),
    );

    localStorage.setItem('search', filter);
    return filteredMovies;
  };

  const handleSearch = async (searchValue) => {
    try {
      setError('');
      setIsLoading(true);
      const movies = await fetchMovies();
      const filteredMovies = filterMovies(searchValue, movies);
      setMovies(filteredMovies);
      localStorage.setItem('filteredMovies', JSON.stringify(filteredMovies));
    } catch (error) {
      console.log(error);
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  const tokenCheck = async () => {
    try {
      const userData = await mainApi.getContent();
      console.log(userData);
      setIsLoggedIn(true);
      setCurrentUser((user) => ({
        ...user,
        ...userData,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    tokenCheck();
  }, []);

  const handleRegister = (values) => {
    mainApi
      .signup(values)
      .then((res) => {
        history.push('/movies');
      })
      .catch((err) => console.log(err));
  };

  const handleLogin = (values) => {
    mainApi
      .signin(values)
      .then((res) => {
        console.log(res);
        setIsLoggedIn(true);
        history.push('/movies');
      })
      .catch((err) => console.log(err));
  };

  const handleLogout = () => {
    mainApi.signout();
    setIsLoggedIn(false);
  };

  const handleUpdateUser = async (values) => {
    try {
      const response = await mainApi.updateUser(values);
      setCurrentUser((user) => ({
        ...user,
        ...response,
      }));
    } catch (error) {
      console.log(error);
    }
  };

  const hideHeaderPaths = ['/notfound', '/signup', '/signin'];
  const hideFooterPaths = ['/notfound', '/profile', '/signup', '/signin'];

  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        {useRouteMatch(hideHeaderPaths) ? null : (
          <Header isLoggedIn={isLoggedIn} />
        )}
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <ProtectedRoute
            path="/movies"
            component={Movies}
            isLoggedIn={isLoggedIn}
            onSearch={handleSearch}
            movies={movies}
            isLoading={isLoading}
            error={error}
          />

          <Route path="/saved-movies">
            <SavedMovies />
          </Route>

          <ProtectedRoute
            path="/profile"
            component={Profile}
            isLoggedIn={isLoggedIn}
            onLogout={handleLogout}
            onUpdate={handleUpdateUser}
          />
          <Route path="/signup">
            {isLoggedIn ? (
              <Redirect to="/movies" />
            ) : (
              <Register onRegister={handleRegister} />
            )}
          </Route>
          <Route path="/signin">
            {isLoggedIn ? (
              <Redirect to="/movies" />
            ) : (
              <Login onLogin={handleLogin} />
            )}
          </Route>
          <Route path="/notfound">
            <NotFound />
          </Route>
          <Redirect to="/notfound" />
        </Switch>
        {useRouteMatch(hideFooterPaths) ? null : <Footer />}
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
