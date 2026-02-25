import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";
import { FaBars, FaTimes, FaInstagram } from 'react-icons/fa';

const Navbar = () => {
    const [nav, setNav] = useState(false);

  return (
    <div className='fixed top-0 left-0 right-0 flex justify-between items-center md:h-[10vh] h-[9vh] md:px-16 px-4 bg-slate-900 text-white'>
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Shelcom Designs Logo" className="h-9 w-auto" />
          <span className="text-lg font-semibold text-slate-900 dark:text-white">
            Shelcom Designs
          </span>
        </Link>
        <div className='hidden md:flex justify-between gap-16'>
            <ul className='flex gap-12 text-lg justify-between items-center cursor-pointer list-none'>
                <li className='hover:text-gray-400'><Link to='/'>Home</Link></li>
                <li className='hover:text-gray-400'><Link to='/about'>About</Link></li>
                <li className='hover:text-gray-400'><Link to='/blog'>Blog</Link></li>
                <li className='hover:text-gray-400'><Link to='/services'>Services</Link></li>
                <li className='hover:text-gray-400'><Link to='/projects'>Projects</Link></li>
                <li className='hover:text-gray-400'><Link to='/contact'>Contact</Link></li>
            </ul>
            <div className='flex gap-6 items-center text-xl cursor-pointer'>
                <a href='https://instagram.com/_k_e_v__' className='hover:text-gray-400'><FaInstagram /></a>
            </div>
        </div>
        <div
            onClick={() => setNav(!nav)}
            className='md:hidden cursor-pointer z-10'
        >
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
            <ul className='flex flex-col text-xl items-center gap-12 absolute top-0 left-0 w-full h-screen list-none pt-40 bg-gradient-to-b from-zinc-700 to-zinc-400 z-20'>
                <li className='hover:text-gray-400'><Link onClick={() => setNav(!nav)} to='/'>Home</Link></li>
                <li className='hover:text-gray-400'><Link onClick={() => setNav(!nav)} to='/about'>About</Link></li>
                <li className='hover:text-gray-400'><Link onClick={() => setNav(!nav)} to='/blog'>Blog</Link></li>
                <li className='hover:text-gray-400'><Link onClick={() => setNav(!nav)} to='/services'>Services</Link></li>
                <li className='hover:text-gray-400'><Link onClick={() => setNav(!nav)} to='/projects'>Projects</Link></li>
                <li className='hover:text-gray-400'><Link onClick={() => setNav(!nav)} to='/contact'>Contact</Link></li>
            </ul>
        )}
    </div>
  )
}

export default Navbar;
