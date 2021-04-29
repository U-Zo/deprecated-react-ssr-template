import { Route, Switch } from 'react-router';
import Header from './components/Header';
import Home from './pages/Home';
import News from './pages/News';

const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <Route component={Home} path="/" exact />
      <Switch>
        <Route component={News} path="/news" />
      </Switch>
    </>
  );
};

export default App;
