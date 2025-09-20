import Image from 'next/image';
import Slider from './Slider';

const Hero = () => {
  return (
    <>
      <section className='bg-[#D7F5DC] w-full'>
        <div className='   px-4 md:px-8 lg:px-10 xl:px-20 flex flex-col lg:flex-row items-center justify-start   gap-[16px]  mx-auto lg:justify-between 2xl:container'>
          <div className='mt-[5rem] lg:mt-[9rem] '>
            <div className=' flex flex-col gap-[10px] items-start justify-start'>
              <h2 className='font-poppins font-bold text-black text-[22px] nwsm:text-[30px] gsm:text-[40px] leading-[30px] nwsm:leading-[35px] sm:leading-[50px]  max-w-[550px] md:max-w-max lg:max-w-[550px] sm:text-[40px] xl:text-[50px]  xl:leading-[65px] '>
                Increase Your Customers Loyalty and Satisfaction
              </h2>
              <p className='text-black text-[16px] md:text-[20px] font-normal md:font-medium max-w-[472px] md:max-w-max lg:max-w-[472px] '>
                We help businesses like yours earn more customers, standout from
                competitors, make more money
              </p>
            </div>

            <div className='mt-[37px] flex justify-start items-start lg:pb-[1rem] xl:mb-0'>
              <button className='bg-[#20B15A] text-white rounded-[16px] px-[30px] py-[20px]  font-poppins font-medium text-[20px]'>
                Get Started
              </button>
            </div>
          </div>

          <div className='flex items-center justify-center lg:items-start lg:justify-start mt-[2rem] md:mt-[5rem] xl:mt-[9rem]'>
            <Image
              src='/images/heroImg.png'
              width={672}
              height={564}
              alt='hero image'
            />
          </div>
        </div>
        <div className='pb-6'>
          <Slider />
        </div>
      </section>
    </>
  );
};

export default Hero;
