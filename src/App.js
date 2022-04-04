import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//import pages
import Home from './pages/Home'
// import SingleDog from './pages/SingleDog'
import Error from './pages/Error'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/dog">
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
