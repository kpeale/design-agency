import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <section className='bg-[#00CA72]   w-full lg:pt-[3rem]'>
      <div className=' py-20 lg:py-0 px-0 lg:px-10 xl:px-20 2xl:container 2xl:mx-auto flex flex-col lg:flex-row items-center justify-center lg:justify-between lg:items-start'>
        <div className=' flex flex-col items-center justify-center lg:items-start lg:justify-start'>
          <Link
            href='/'
            className='font-poppins text-[20px] font-bold flex flex-row  items-center justify-center lg:items-start lg:justify-start lg:px-4'
          >
            <span className='text-black'>Design</span>
            <span className='text-[#F55F1D] uppercase'>Agency</span>
          </Link>
          <div className='mt-[19.4px] max-w-[300px] hsm:max-w-[350px] nwsm:max-w-[370px] gsm:max-w-[450px] sm:max-w-[550px] md:max-w-[700px] lg:max-w-[329px] flex flex-col items-center justify-center lg:items-start lg:justify-start'>
            <p className='text-black font-poppins text-lg text-center lg:text-start'>
              Design Agency turns your ideas to live. All you have to do is to
              share your ideas with us and we will make sure it is well executed
            </p>
          </div>
          <div className='flex flex-row items-center justify-center lg:items-start lg:justify-start mt-[20px] gap-[27.94px]'>
            <div className='w-[40.82px] h-[40.82px] flex items-center justify-center bg-[#20B15A] rounded-full'>
              <Image
                src='/images/facebook.png'
                width={9.21}
                height={17.76}
                alt='facebook icon'
              />
            </div>
            <div className='w-[40.82px] h-[40.82px] flex items-center justify-center bg-[#20B15A] rounded-full'>
              <Image
                src='/images/twitter.png'
                width={17.22}
                height={14}
                alt='twitter icon'
              />
            </div>
            <div className='w-[40.82px] h-[40.82px] flex items-center justify-center bg-[#20B15A] rounded-full'>
              <Image
                src='/images/linkedin.png'
                width={15.13}
                height={15.1}
                alt='linkedin icon'
              />
            </div>
            <div className='w-[40.82px] h-[40.82px] flex items-center justify-center bg-[#20B15A] rounded-full'>
              <Image
                src='/images/instagram.png'
                width={15}
                height={15}
                alt='instagram icon'
              />
            </div>
          </div>
          <div className=' mt-[2rem] lg:mt-[6rem] flex flex-col items-start justify-start lg:items-start lg:justify-start lg:pb-[29px]'>
            <p className='text-black font-poppins font-medium text-[20px]'>
              Copyright Design Agency 2025
            </p>
          </div>
        </div>

        <div className='flex flex-col items-center justify-center lg:items-start lg:justify-start mt-[1rem] '>
          <h2 className='text-black font-poppins text-[20px] font-semibold'>
            Quick Links
          </h2>
          <div className='flex flex-col items-center justify-center lg:items-start lg:justify-start mt-[16px] gap-[25px]'>
            <Link
              href='/'
              className='text-black font-poppins text-lg font-medium'
            >
              Services
            </Link>
            <Link
              href='/'
              className='text-black font-poppins text-lg font-medium'
            >
              Portfolio
            </Link>
            <Link
              href='/'
              className='text-black font-poppins text-lg font-medium'
            >
              About Us
            </Link>
            <Link
              href='/'
              className='text-black font-poppins text-lg font-medium'
            >
              Contact Us
            </Link>
          </div>
        </div>
        <div className=' flex flex-col items-center justify-center lg:items-start lg:justify-start mt-[2rem] lg:mt-0 lg:pt-[1rem]'>
          <h2 className='text-black font-poppins text-[20px] font-semibold'>
            Address
          </h2>
          <div className='flex flex-col items-center justify-center mt-[1rem] lg:mt-[26px] lg:items-start lg:justify-start max-w-[300px] hsm:max-w-[350px] nwsm:max-w-[375px] gsm:max-w-[450px] sm:max-w-[550px] md:max-w-[700px] lg:max-w-[258px]'>
            <p className='text-black font-poppins font-medium text-[20px] text-center lg:text-start'>
              Design Agency Head Office. Airport Road United Arab Emirate
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
