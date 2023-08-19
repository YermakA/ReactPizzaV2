import './scss/app.scss'
import Header from './components/Header'
import Content from './components/Content'
import { Routes, Route } from 'react-router-dom'
import { NotFound } from './components/pages/NotFound'
import { Cart } from './components/pages/Cart'
function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Routes>
          <Route path='/' element={<Content />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
