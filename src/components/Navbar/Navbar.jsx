import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {


  return (
    <nav className='flex items-center justify-between py-4 px-12'>
      {/* Logo  */}
      <div className='text-2xl font-bold'>
        <Link to="/" className='hover:text-gray-700'>OPRAHTASK</Link>
      </div>

      {/* Navigation Links */}
      <ul className='flex space-x-8'>
        <li>
          <Link to="/home" className='hover:text-gray-500 hover:underline hover:underline-offset-8 hover:decoration-2' >
            Home
          </Link>
        </li>
        <li>
          <Link to="/home" className='hover:text-gray-500 hover:underline hover:underline-offset-8 hover:decoration-2'>
            Solutions
          </Link>
        </li>
        <li>
          <Link to="/home" className='hover:text-gray-500 hover:underline hover:underline-offset-8 hover:decoration-2'>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/home" className='hover:text-gray-500 hover:underline hover:underline-offset-8 hover:decoration-2'>
            Contact
          </Link>
        </li>
      </ul>

      <div className='space-x-4'>
        <button className='hover:text-blue-700 font-semibold' >Login</button>
        <button className='px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600'>Get started</button>
      </div>
    </nav>
  )
}

export default Navbar