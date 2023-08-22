import './scss/app.scss'
import { useState } from 'react'
import Header from './components/Header'
import Content from './components/Content'
import { Routes, Route } from 'react-router-dom'
import { NotFound } from './components/pages/NotFound'
import { Cart } from './components/pages/Cart'
import { Provider } from 'react-redux'
import store from './redux/store'
function App() {


  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
