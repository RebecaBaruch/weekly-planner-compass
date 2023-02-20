import './App.css'
import RoutesManager from './routes'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className="App">
      <RoutesManager />
      <ToastContainer />
    </div>
  )
}

export default App
