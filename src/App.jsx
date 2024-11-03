
import './App.css'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import Products from './Products'
import Product from './Product'

function App() {

  return (
      <div className="bg-black text-white min-h-screen">
    <Router>
      <Switch>
        <Route exact path='/'>        
      <>
        <div className='grid place-content-center h-screen text-center'>
          <h1 className='text-3xl font-bold'>My product website</h1>
          <div className="py-5 font-semibold underline">
          <Link to='/products'>View products</Link>
          </div>
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
      </div>
  )
}

export default App
