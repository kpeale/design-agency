import Image from 'next/image';
const Hero = () => {
  return (
    <section className='bg-[#D7F5DC] mx-auto  fixed px-4 md:px-8 lg:px-10 xl:px-20 2xl:px-32 flex flex-col lg:flex-row items-center justify-center bg:justify-evenly gap-[16px]'>
      <div className='mt-[5rem] lg:mt-[9rem]'>
        <div className=' flex flex-col gap-[10px] items-start justify-start'>
          <h2 className='font-poppins font-bold text-black text-[22px] nwsm:text-[30px] leading-[30px] lg:leading-[50px] max-w-[550px] md:max-w-max lg:max-w-[550px] lg:text-[40px] xl:text-[50px] xl:leading-[65px]'>
            Increase Your Customers Loyalty and Satisfaction
          </h2>
          <p className='text-black text-[16px] md:text-[20px] font-normal md:font-medium max-w-[472px] md:max-w-max lg:max-w-[472px]'>
            We help businesses like yours earn more customers, standout from
            competitors, make more money
          </p>
        </div>

        <div className='mt-[37px] flex items-center justify-center lg:justify-start lg:items-start'>
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
    </section>
  );
};

export default Hero;
