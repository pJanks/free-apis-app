import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import { Header } from './components/Header/Header'
import { Home } from './pages/Home/Home'
import { Results } from './pages/Results/Results'

export const App = () => {
  return (
    <Router>
      <main className='app-wrapper'>
        <Header />
        <Routes>
          <Route to='/' element={<Home />} />
          <Route to='/results' element={<Results />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
