'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoClose, IoMenu } from 'react-icons/io5';

const Nav = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const dropDownRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target as Node)
      ) {
        setShowServices(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setShowLinks(false);
      }
    };

    if (showLinks) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showLinks]);

  useEffect(() => {
    const handleDropdown = (event: MouseEvent) => {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(event.target as Node)
      ) {
        setShowServices(false);
      }
    };

    if (showServices) {
      document.addEventListener('mousedown', handleDropdown);
    }

    return () => {
      document.removeEventListener('mousedown', handleDropdown);
    };
  }, [showServices]);

  return (
    <>
      <div className='w-full bg-[#D7F5DC] mx-auto  fixed z-50 top-0'>
        <nav
          className={` flex flex-row items-center justify-between 2xl:justify-between  2xl:container  mx-auto   px-4 md:px-8 lg:px-10 xl:px-20    transition-all duration-300 ${
            isScrolled ? ' backdrop-blur-lg' : ''
          }`}
          ref={navRef}
        >
          <Link
            href='/'
            className='font-poppins text-[20px] font-bold flex flex-row py-4 lg:py-[25px]'
          >
            <span className='text-black'>Design</span>
            <span className='text-[#F55F1D] uppercase'>Agency</span>
          </Link>

          <div className='flex lg:hidden py-4 '>
            <button onClick={() => setShowLinks(!showLinks)}>
              {showLinks ? (
                <IoClose className='w-5 h-5' />
              ) : (
                <IoMenu className='w-5 h-5' />
              )}
            </button>
          </div>

          <div className='hidden lg:flex gap-[30px] py-[18px] items-center justify-center'>
            <div
              className='relative'
              onMouseEnter={() => setShowServices(true)}
              ref={servicesRef}
            >
              <button className='flex flex-row items-center justify-center gap-2.5 font-poppins font-medium text-black text-[16px] border-none outline-none'>
                Services
                <Image
                  src='/images/arrowUp.png'
                  width={20}
                  height={20}
                  alt='arrow up'
                />
              </button>

              {showServices && (
                <div
                  className='absolute top-full mt-2 left-0 bg-gray-200 shadow-lg rounded-md w-[200px] p-4 z-50'
                  ref={dropDownRef}
                >
                  <Link
                    href='/'
                    className='block font-poppins font-medium text-black text-[16px] py-2'
                    onClick={() => setShowServices(false)}
                  >
                    About Us
                  </Link>
                  <Link
                    href='/'
                    className='block font-poppins font-medium text-black text-[16px] py-2'
                    onClick={() => setShowServices(false)}
                  >
                    Contact Us
                  </Link>
                </div>
              )}
            </div>

            <Link
              href='/'
              className='font-poppins font-medium text-black text-[16px]'
            >
              About Us
            </Link>

            <Link
              href='/'
              className='font-poppins font-medium text-black text-[16px]'
            >
              Contact Us
            </Link>

            <div>
              <button className='font-poppins font-medium text-black text-[16px] bg-white border-[1px] border-[#20B15A] py-[10px] px-[25px] rounded-[10px]'>
                Login
              </button>
            </div>

            <div>
              <button className='font-poppins font-medium text-white text-[16px]  bg-[#20B15A] py-[10px] px-[25px] rounded-[10px]'>
                Register
              </button>
            </div>
          </div>
        </nav>
      </div>

      {showLinks && (
        <div className='flex flex-col items-center justify-center gap-[30px] py-[80px] w-[300px] h-[400px] bg-gray-200 fixed top-[6rem] right-5 z-40 p-4'>
          <Link
            href='/'
            className='font-poppins font-medium text-black text-[16px]'
          >
            Services
          </Link>
          <Link
            href='/'
            className='font-poppins font-medium text-black text-[16px]'
          >
            About Us
          </Link>

          <Link
            href='/'
            className='font-poppins font-medium text-black text-[16px]'
          >
            Contact Us
          </Link>

          <div>
            <button className='font-poppins font-medium text-black text-[16px] bg-white border-[1px] border-[#20B15A] py-[10px] px-[25px] rounded-[10px]'>
              Login
            </button>
          </div>

          <div>
            <button className='font-poppins font-medium text-white text-[16px]  bg-[#20B15A] py-[10px] px-[25px] rounded-[10px]'>
              Register
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Nav;
