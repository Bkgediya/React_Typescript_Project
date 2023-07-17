import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Store from './pages/Store';
import Home from './pages/Home';
import About from './pages/About';
import { ShoppingCartProvider } from './context/ShoppingCartContext';

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <div className='sm:px-40 px-10 mt-10'>  
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/store' element = {<Store/>}/>
          <Route path='/cartitems' element = {<About/>}/>
        </Routes>
      </div>
    </ShoppingCartProvider>
  )
}

export default App
