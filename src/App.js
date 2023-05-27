import {BrowserRouter, Route, Switch} from 'react-router-dom'
import LoginComponent from './components/LoginComponent'
import Home from './components/Home'

import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={LoginComponent} />
      <Route exact path="/Home" component={Home} />
    </Switch>
  </BrowserRouter>
)

export default App
