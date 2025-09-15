import Image from 'next/image';
import Link from 'next/link';
const Aboutus = () => {
  return (
    <section className='bg-white pt-[37px] lg:pt-[67px] px-0 lg:px-10 xl:px-20 2xl:px-32'>
      <div className='flex flex-col items-center justify-center lg:items-start lg:justify-start'>
        <p className='text-[#20B15A] font-poppins font-medium text-[20px]'>
          What We Do
        </p>
        <div className='mt-[15px]  max-w-[495px]'>
          <p className='text-black font-poppins text-center lg:text-start text-[20px] lg:text-[30px] font-semibold'>
            We provide the Perfect Solution to your business growth
          </p>
        </div>
      </div>

      <div className='flex flex-col lg:flex-row gap-[45px] bg:gap-[180px] items-center justify-center mx-auto mt-[40px]'>
        <div className='flex flex-col items-center justify-center lg:items-start lg:justify-start w-[300px] nwsm:w-[380px] lg:w-[300px] xl:w-[380px]'>
          <div className='flex flex-col items-center justify-center lg:items-start lg:justify-start gap-[15px] pt-[30px] lg:pt-[50px] pl-0 lg:pl-[30px]'>
            <div className='bg-[#D7F5DC] rounded-[20px] p-[30px] w-[93.33px] h-[93.33px] flex items-center'>
              <Image
                src='/images/growBrand-icon.png'
                width={33.33}
                height={33.33}
                alt='image'
              />
            </div>
            <div className='flex flex-col  items-center justify-center lg:items-start lg:justify-start'>
              <p className='text-black font-poppins lg:text-xl xl:text-2xl font-semibold'>
                Grow Your Business
              </p>
              <p className='text-black text-lg font-poppins max-w-max lg:max-w-[299px] pt-[15px]'>
                We help identify the best ways to improve your business
              </p>
            </div>
          </div>

          <div className='pl-0 lg:pl-[30px] pt-[43px] lg:pb-[57.7px] '>
            <Link
              href='image'
              className='text-black font-poppins text-lg flex flex-row gap-2 items-center'
            >
              Learn More
              <Image
                src='/images/arrowRight.png'
                width={16}
                height={14}
                alt='right arrow'
              />
            </Link>
          </div>
        </div>

        {/* second card */}
        <div className='flex flex-col items-center justify-center lg:items-start lg:justify-start w-[300px] nwsm:w-[380px] lg:w-[300px] xl:w-[380px]'>
          <div className='flex flex-col items-center justify-center lg:items-start lg:justify-start gap-[15px] pt-[30px] lg:pt-[50px] pl-0 lg:pl-[30px]'>
            <div className='bg-[#D7F5DC] rounded-[20px] p-[30px] w-[93.33px] h-[93.33px] flex items-center'>
              <Image
                src='/images/heartIcon.png'
                width={33.33}
                height={33.67}
                alt='image'
              />
            </div>
            <div className='flex flex-col  items-center justify-center lg:items-start lg:justify-start'>
              <p className='text-black font-poppins lg:text-xl xl:text-2xl font-semibold'>
                Improve brand loyalty
              </p>
              <p className='text-black text-lg font-poppins max-w-max lg:max-w-[299px] pt-[15px]'>
                We help identify the best ways to improve your business
              </p>
            </div>
          </div>

          <div className='pl-0 lg:pl-[30px] pt-[43px] lg:pb-[57.7px] '>
            <Link
              href='image'
              className='text-black font-poppins text-lg flex flex-row gap-2 items-center'
            >
              Learn More
              <Image
                src='/images/arrowRight.png'
                width={16}
                height={14}
                alt='right arrow'
              />
            </Link>
          </div>
        </div>

        {/* third card */}
        <div className='flex flex-col items-center justify-center lg:items-start lg:justify-start w-[300px] nwsm:w-[380px] lg:w-[300px] xl:w-[380px]'>
          <div className='flex flex-col items-center justify-center lg:items-start lg:justify-start gap-[15px] pt-[30px] lg:pt-[50px] pl-0 lg:pl-[30px]'>
            <div className='bg-[#D7F5DC] rounded-[20px] p-[30px] w-[93.33px] h-[93.33px] flex items-center'>
              <Image
                src='/images/modelIcon.png'
                width={33.32}
                height={32.89}
                alt='image'
              />
            </div>
            <div className='flex flex-col  items-center justify-center lg:items-start lg:justify-start'>
              <p className='text-black font-poppins lg:text-xl xl:text-2xl font-semibold '>
                Improve Business Model
              </p>
              <p className='text-black text-lg font-poppins max-w-max lg:max-w-[299px] pt-[15px]'>
                We help identify the best ways to improve your business
              </p>
            </div>
          </div>

          <div className='pl-0 lg:pl-[30px] pt-[43px] lg:pb-[57.7px] '>
            <Link
              href='image'
              className='text-black font-poppins text-lg flex flex-row gap-2 items-center'
            >
              Learn More
              <Image
                src='/images/arrowRight.png'
                width={16}
                height={14}
                alt='right arrow'
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;
