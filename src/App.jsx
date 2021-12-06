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
          <Route path='/' element={<Home />} />
          <Route path='/results' element={<Results />} />
        </Routes>
      </main>
    </Router>
  )
}

export default App
