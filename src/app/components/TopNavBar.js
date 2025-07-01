"use client";
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getImagePath } from '@/app/utils/getImagePath';
import { Moon, Sun, User, LogOut } from 'lucide-react';
import { useDispatch } from 'react-redux';
import { logout } from '@/app/redux/slices/authSlice';
import { removeAuthCookie } from '@/app/utils/removeCookie';

const navItemsBase = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About Us',
    href: '/pages/about',
  },
  {
    name: 'Contact Us',
    href: '/pages/contact',
  },
  {
    name: 'Our Blogs',
    href: '/pages/blog',
  },
  {
    name: 'Career',
    href: '/pages/career',
  },
  {
    name: 'Pages',
    dropdown: [
      { name: 'Drones', href: '/pages/page/drone' },
      { name: 'Impact', href: '/pages/page/impact' },
      { name: 'ATAL Tinkering Lab', href: '/pages/page/study' },
      { name: 'School Program', href: '/pages/page/school' },
      { name: 'Learning', href: '/pages/page/learning' },
      { name: 'Franchise', href: '/pages/page/franchise' },
      { name: 'Event', href: '/pages/page/event' },
    ],
  },
];

export default function TopNavBar() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [theme, setTheme] = useState('light');
  const [profileOpen, setProfileOpen] = useState(false);
  const navbarRef = useRef(null);
  const profileBtnRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setDropdownOpen(null);
        setProfileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle resizing
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
        setDropdownOpen(null);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleDropdown = (menu) => {
    if (dropdownOpen === menu) {
      setDropdownOpen(null);
    } else {
      setDropdownOpen(menu);
      // Auto-close dropdown after 2 seconds
      setTimeout(() => {
        setDropdownOpen(null);
      }, 2000);
    }
  };

  // Set theme on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
      setTheme(savedTheme);
      if (savedTheme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      document.documentElement.setAttribute('data-theme', savedTheme);
    }
  }, []);

  // Update theme when changed
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('theme', theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const handleNavigation = (href) => {
    // Close dropdown and mobile menu on navigation
    setDropdownOpen(null);
    setIsOpen(false);
    router.push(href);
  };

  const handleMobileDropdownToggle = (menu) => {
    if (window.innerWidth < 1024) {
      // For mobile, just toggle the dropdown without closing the navbar
      toggleDropdown(menu);
    } else {
      // For desktop, use the normal behavior
      toggleDropdown(menu);
    }
  };

  const handleMobileLinkClick = (href) => {
    handleNavigation(href);
    setIsOpen(false); // Close mobile menu after click
  };

  return (
    <nav
      ref={navbarRef}
      className="bg-white shadow-md dark:bg-gray-900 border-b dark:border-gray-700 sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center text-black dark:text-white">
            <Image src={getImagePath("/logo.png")} alt="Hiprotech Logo" width={150} height={40} className="h-10 w-auto object-contain" priority />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItemsBase.map((item) => (
              <div key={item.name} className="relative">
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="text-black dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 text-sm font-medium flex items-center"
                    >
                      {item.name}
                      <svg
                        className={`ml-1 h-4 w-4 transition-transform ${dropdownOpen === item.name ? 'rotate-180' : ''}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M5.25 7.25L10 12l4.75-4.75" />
                      </svg>
                    </button>

                    {dropdownOpen === item.name && (
                      <div className="absolute z-20 mt-2 w-52 bg-white dark:bg-gray-800 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                        <div className="py-2">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              onClick={() => handleNavigation(subItem.href)}
                              className="block px-4 py-2 text-sm text-black dark:text-gray-200 hover:bg-indigo-50 dark:hover:bg-gray-700 hover:text-indigo-600 dark:hover:text-white"
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => handleNavigation(item.href)}
                    className="text-black dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 text-sm font-medium"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full text-black dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </button>

            {/* Mobile Menu Toggle */}
            <div className="lg:hidden flex items-center space-x-2">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-md text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <span className="sr-only">Toggle menu</span>
                {isOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden px-4 pb-4">
          {navItemsBase.map((item) => (
            <div key={item.name} className="py-1">
              {item.dropdown ? (
                <>
                  <button
                    type="button"
                    onClick={() => handleMobileDropdownToggle(item.name)}
                    className="w-full text-left flex justify-between items-center px-4 py-2 text-black dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    {item.name}
                    <svg
                      className={`ml-1 h-4 w-4 transition-transform ${dropdownOpen === item.name ? 'rotate-180' : ''}`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M5.25 7.25L10 12l4.75-4.75" />
                    </svg>
                  </button>
                  {dropdownOpen === item.name && (
                    <div className="pl-4 space-y-1">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          onClick={() => handleMobileLinkClick(subItem.href)}
                          className="block px-4 py-2 text-sm text-black dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  onClick={() => handleMobileLinkClick(item.href)}
                  className="block px-4 py-2 text-black dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}