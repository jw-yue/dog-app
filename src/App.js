import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
//import pages
import Home from './pages/Home'
import About from './pages/About'
import SingleRecipe from './pages/SingleRecipe'
import Error from './pages/Error'
//import components

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/recipe/:id">
          <SingleRecipe />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
