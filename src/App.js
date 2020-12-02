import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import HomePage from './pages/HomePage'

function App() {
  return (
    <div>
      <h1>Hej</h1>
      <Navigation />
      <Switch>
        
        <Route path="/about">
          <AboutPage />
        </Route>

        <Route path="/contact">
          <ContactPage />
        </Route>

        <Route path="/">
          <HomePage />
        </Route>

      </Switch>
    </div>
  );
}

export default App;
