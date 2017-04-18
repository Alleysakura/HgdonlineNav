import React from 'react';
import ReactDOM from 'react-dom';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {Route, HashRouter as Router, Link} from 'react-router-dom';
import Official from './App/Official';
import Inquire from './App/Inquire';
import Childsite from './App/Childsite';


const IndexApp = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/topic">Topic</Link></li>
      </ul>
      <hr />

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/topics" component={Topics}/>
    </div>
  </Router>
);

const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
);

const About = () => (
  <div>
    <h2>About</h2>
  </div>
);

const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      <li>
        <Link to={'${match.url}/rendering'}>
          rendering with react
        </Link>
      </li>
      <li>
        <Link to={'${match.url}/component'}>
        component
        </Link>
      </li>
      <li>
        <Link to={'${match.url}/props-v-state'}>
          props-v-state
        </Link>
      </li>
    </ul>
    <Route path={'${match.url}/:topicId'} component={Topics}/>
    <Route exact path={match.url} render={ () => (
        <h3>Pleast choose id</h3>
      )}/>
    </div>

);

const Topic = ({ match }) => (
  <div>
    <h3>{match.params.topicId}</h3>
  </div>
);

ReactDOM.render(<IndexApp/>,document.getElementById('app'));

export default IndexApp;