import Link from 'next/link';
import NavLink from './NavLink';

const Header = () => (
  <header className="m-8 pb-4 border-b-2">
    <h1 className="text-4xl text-gray-800 font-bold ml-2">
      <Link href="/">Duncan Bain</Link>
    </h1>
    <nav className="my-2">
      <ul className="flex mt-4 md:mt-0">
        <NavLink href="/about">About</NavLink>
        <NavLink href="/projects">Projects</NavLink>
        <NavLink href="/uses">Uses</NavLink>
      </ul>
    </nav>
  </header>
);

export default Header;
