import logo from "../assets/m.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='relative flex items-center justify-between text-lg leading-6 mx-8 my-5'>
      <img
        src={logo}
        alt='logo of the website'
        className='w-auto h-12 -mb-14'
      />
      <div className='flex items-center'>
        <nav>
          <ul className='flex items-center space-x-8'>
            <Link to='/'>Home</Link>
            <Link to='/work'>Work</Link>
            <Link to='/skills'>Skills</Link>
            <Link to='/contact'>Contact Me</Link>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
