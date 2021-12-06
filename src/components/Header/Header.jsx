import './Header.css'
import { Link } from 'react-router-dom'

export const Header = () => {

  return (
    <header className='main-header'>
      <Link to='/' className='header-link'>Free API App</Link>
    </header>
  )
}