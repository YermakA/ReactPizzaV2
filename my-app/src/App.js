import './scss/app.scss'
import MyLayout from './layouts/MyLayout'
import Content from './components/Content'
import { Routes, Route } from 'react-router-dom'
import { NotFound } from './pages/NotFound'
import { Cart } from './pages/Cart'
import { Provider } from 'react-redux'
import store from './redux/store'
function App() {


  return (
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<MyLayout />} >
          <Route index element={<Content />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </Provider>
  );
}

export default App;
