
import './App.css';
import { Contact } from './components/Contact';
import { Home } from './components/Home';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
export const App = () => {

  return (
    <Router>
      <Switch>
          <Route path='/' component={<Home/>}/>
         
          <Route path='/contact' component={<Contact/>}/>
        
      </Switch>
    </Router>

  );
}


