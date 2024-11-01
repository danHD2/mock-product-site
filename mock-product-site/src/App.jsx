
import './App.css'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Products from './Products'
import Product from './Product'

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path='/'>        
      <>
        <div>
          <h1>Welcome to the best website</h1>
          <Link to='/products'>View products</Link>
        </div>
      </>
        </Route>
        <Route path="/products">
        <Products />
        </Route>
        <Route path="/product/:id">
        <Product />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
