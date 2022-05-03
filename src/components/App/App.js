import { Switch } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import './App.css';
import NotFound from '../NotFound/NotFound';
import Layout from '../Layout/Layout';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Layout>
            <Main />
          </Layout>
        </Route>
        <Route path="/movies">
          <Layout>
            <Movies />
          </Layout>
        </Route>
        <Route path="*" component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
