import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faBox, faHiking, faHeart, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HomePage from './pages/HomePage';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <main>
      <Router>
        <Switch>
          <Route path='/' component={LandingPage} exact />
          <Route path='/search' component={HomePage} />
        </Switch>
      </Router>
    </main> 
  )
}

library.add(fab, faBox, faHiking, faHeart, faSpinner);

export default App;
