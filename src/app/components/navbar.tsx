import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-10 bg-black bg-opacity-50">
      <div className="container mx-auto flex items-center justify-between px-4 py-2">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <img src="/lion.png" alt="Logo" className="h-8 mr-2" />
          <Link href="/">
            <div className="text-white font-semibold text-xl">Alpha Store</div>
          </Link>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div className="hidden lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <Link href="/">
              <div className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4 border-b-2 border-transparent hover:border-white">
                Home
              </div>
            </Link>
            <Link href="/about">
              <div className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4 border-b-2 border-transparent hover:border-white">
                About
              </div>
            </Link>
            <Link href="/services">
              <div className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white mr-4 border-b-2 border-transparent hover:border-white">
                Services
              </div>
            </Link>
            <Link href="/information">
              <div className="block mt-4 lg:inline-block lg:mt-0 text-gray-200 hover:text-white border-b-2 border-transparent hover:border-white">
                Contact
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;



