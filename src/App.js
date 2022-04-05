import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//import pages
import Home from './pages/Home'
import SingleDog from './pages/SingleDog'
import Error from './pages/Error'

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/dog">
          <Home />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
