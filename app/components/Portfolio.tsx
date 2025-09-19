import React from 'react';
import Image from 'next/image';

const Portfolio = () => {
  return (
    <section className='bg-white pt-[37px] lg:pt-[67px] px-0 lg:px-10 xl:px-20 2xl:px-32'>
      <div className='flex flex-col items-center justify-center lg:items-start lg:justify-start'>
        <p className='text-[#20B15A] font-poppins font-medium text-[20px]'>
          OUR PORTFOLIO
        </p>
        <div className='mt-[15px]  max-w-[495px]'>
          <p className='text-black font-poppins text-center lg:text-start text-[20px] lg:text-[30px] font-semibold'>
            We provide the Perfect Solution to your business growth
          </p>
        </div>
      </div>

      <div className='mt-[4rem] flex flex-col xl:flex-row gap-[30px] xl:gap-[95px] items-center justify-center xl:justify-between'>
        <div className='flex flex-col gap-[42.79px] items-center justify-center xl:items-start xl:justify-start'>
          <div className='xl:mt-[-11.5rem]'>
            <Image
              src='/images/img1.png'
              width={561}
              height={342.31}
              alt='image'
              className='w-[300px] nwsm:w-[350px] sm:w-[561px]'
            />
          </div>
          <div className='flex flex-col gap-[14.26px]  items-center justify-center xl:items-start xl:justify-start'>
            <h4 className='text-black font-poppins font-semibold text-[22.82px] max-w-max   text-center xl:text-start'>
              Digital Marketing Agency Website
            </h4>
            <p className='text-black text-center xl:text-start max-w-[550px] text-[15.21px] font-poppins'>
              This is a website for a client who want to achieve their goals and
              meet their users needs while also increasing their reach. Accross
              all platforms. This is a website rebrand
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-[42.79px]  items-center justify-center xl:items-start xl:justify-start'>
          <div>
            <Image
              src='/images/img2.png'
              width={561.15}
              height={521.21}
              alt='image'
              className='w-[300px] h-[260.06px] nwsm:w-[350px] nwsm:h-[310.06px] sm:w-[561px] sm:h-[521.21px]'
            />
          </div>
          <div className='flex flex-col gap-[14.26px] items-center justify-center xl:items-start xl:justify-start'>
            <h4 className='text-black font-poppins font-semibold text-[22.82px] max-w-max text-center xl:text-start'>
              Digital Marketing Agency Website
            </h4>
            <p className='text-black max-w-[533.43px] text-[15.21px] font-poppins text-center xl:text-start'>
              This is a website for a client who want to achieve their goals and
              meet their users needs while also increasing their reach. Accross
              all platforms. This is a website rebrand
            </p>
          </div>
        </div>
      </div>
      {/* second row */}
      <div className='mt-[4rem] xl:mt-0 flex flex-col xl:flex-row gap-[30px] xl:gap-[95px] items-center justify-center xl:justify-between'>
        <div className='flex flex-col gap-[42.79px]  items-center justify-center xl:items-start xl:justify-start'>
          <div className='xl:mt-[-6rem]'>
            <Image
              src='/images/img3.png'
              width={561}
              height={522.97}
              alt='image'
              className='w-[300px] h-[261.9px] nwsm:w-[350px] nwsm:h-[311.97px] sm:w-[561px] sm:h-[522.97px]'
            />
          </div>
          <div className='flex flex-col gap-[14.26px] items-center justify-center xl:items-start xl:justify-start'>
            <h4 className='text-black font-poppins font-semibold text-[22.82px] text-center xl:text-start max-w-max'>
              Digital Marketing Agency Website
            </h4>
            <p className='text-black max-w-[533.43px] text-[15.21px] text-center xl:text-start font-poppins'>
              This is a website for a client who want to achieve their goals and
              meet their users needs while also increasing their reach. Accross
              all platforms. This is a website rebrand
            </p>
          </div>
        </div>

        <div className='flex flex-col gap-[42.79px] xl:pt-[5rem]  items-center justify-center xl:items-start xl:justify-start'>
          <div>
            <Image
              src='/images/img4.png'
              width={554}
              height={338.03}
              alt='image'
              className='w-[300px] sm:w-[554px]'
            />
          </div>
          <div className='flex flex-col gap-[14.26px]  items-center justify-center xl:items-start xl:justify-start'>
            <h4 className='text-black font-poppins font-semibold text-[22.82px] text-center xl:text-start max-w-max'>
              Digital Marketing Agency Website
            </h4>
            <p className='text-black max-w-[533.43px] text-[15.21px] font-poppins text-center xl:text-start'>
              This is a website for a client who want to achieve their goals and
              meet their users needs while also increasing their reach. Accross
              all platforms. This is a website rebrand
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
