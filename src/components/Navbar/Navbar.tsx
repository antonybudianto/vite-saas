import { useUser } from '@/context/auth';
import { useNav } from '@/context/nav';
import useOutsideAlerter from '@/hooks/useOutsideAlerter';
import { getAuth, signOut } from 'firebase/auth';
import { useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const { user } = useUser();
  const { nav, toggleCollapse, toggleUserDropdown } = useNav();

  const handleToggleNav = () => {
    toggleCollapse();
  };

  const handleToggleUserDropdown = (e) => {
    toggleUserDropdown();
  };

  const handleSignOut = () => {
    const auth = getAuth();
    signOut(auth);
    toggleUserDropdown();
  };

  const { pathname } = useLocation();
  const isAuth = user !== null;
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, nav?.showUserDropdown && isAuth, () => {
    toggleUserDropdown();
  });

  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleCollapse}
            >
              <span className="sr-only">Open main menu</span>

              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <NavLink to="/">
              <div className="flex flex-shrink-0 items-center">
                <img
                  className="block h-8 w-auto lg:hidden"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                />
                <img
                  className="hidden h-8 w-auto lg:block"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="Your Company"
                />
              </div>
            </NavLink>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <NavLink
                  to="/dashboard"
                  className={`${
                    pathname === '/dashboard'
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }  px-3 py-2 rounded-md text-sm font-medium`}
                  aria-current="page"
                >
                  Dashboard
                </NavLink>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Team
                </a>
              </div>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {!isAuth ? (
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <NavLink
                    className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                    to="/login"
                  >
                    Login
                  </NavLink>
                </div>
              </div>
            ) : (
              <>
                <button
                  type="button"
                  className="ml-5 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="sr-only">View notifications</span>
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                    />
                  </svg>
                </button>
              </>
            )}

            <div className="relative ml-3">
              {isAuth ? (
                <div>
                  <button
                    type="button"
                    className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                    id="user-menu-button"
                    aria-expanded="false"
                    aria-haspopup="true"
                    onClick={toggleUserDropdown}
                  >
                    <span className="sr-only">Open user menu</span>
                    <img
                      className="h-8 w-8 rounded-full"
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </button>
                </div>
              ) : null}

              <div
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="user-menu-button"
                tabIndex={-1}
                ref={wrapperRef}
                style={{
                  display: nav?.showUserDropdown ? 'block' : 'none',
                }}
              >
                <span className="block px-4 py-2 text-sm">
                  Welcome, {user?.displayName}
                </span>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex={-1}
                  id="user-menu-item-0"
                >
                  Your Profile
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex={-1}
                  id="user-menu-item-1"
                >
                  Settings
                </a>
                <a
                  href="#signout"
                  className="block px-4 py-2 text-sm text-gray-700"
                  role="menuitem"
                  tabIndex={-1}
                  onClick={handleSignOut}
                  id="user-menu-item-2"
                >
                  Sign out
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${nav?.collapsed ? 'hidden' : 'sm:hidden'}`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pt-2 pb-3">
          <NavLink
            to="/dashboard"
            className={`${
              pathname === '/dashboard'
                ? 'bg-gray-900 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white'
            } block px-3 py-2 rounded-md text-base font-medium`}
            aria-current="page"
          >
            Dashboard
          </NavLink>

          <a
            href="#"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Team
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
