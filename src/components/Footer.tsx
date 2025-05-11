import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-neutral-100 dark:border-neutral-800 animate-fade-in">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link
              to="/"
              className="font-mono text-lg font-medium tracking-tight"
            >
              GreenPearl
            </Link>
            <p className="mt-4 text-sm text-neutral-600 dark:text-neutral-400 max-w-sm">
              Creating the experience of african kitchen in the US.
            </p>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-sm">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-sm text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-sm text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/menu"
                  className="text-sm text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-medium mb-4 text-sm">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-neutral-600 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors"
                >
                  +996457890
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-neutral-100 dark:border-neutral-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            © {currentYear} GreenPearl. All rights reserved.
          </p>
          {/* <div className="mt-4 md:mt-0 flex space-x-4">
            <a href="#" className="text-xs text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-xs text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors">Terms of Service</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
