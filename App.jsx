import {Provider} from 'react-redux'
import './App.css'
import Store from './store/store'
import ShowNumber from './components/ShowNumber'
import Login from './components/Login'

function App() {


  return (
    <>
      <Provider store={Store}>
      <ShowNumber/>
      <Login/>
      
      </Provider>
    </>
  )
}

export default App
