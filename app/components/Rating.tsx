import Image from 'next/image';
const Rating = () => {
  return (
    <section className='bg-[#FAFFFB] flex flex-col lg:flex-row items-center justify-center gap-[20px] lg:gap-[40px] bg:gap-[160px]  py-5 lg:py-10 mt-[3rem] md:mt-[5rem] '>
      <div className='flex py-5 lg:py-10 flex-col items-center    lg:border-r-[#C4C4C4] lg:border-r lg:pr-[40px]'>
        <div className='flex flex-col items-center justify-center gap-2.5 '>
          <Image
            src='/images/project-plan.png'
            width={70}
            height={70}
            alt='note icon'
          />
          <p className='text-center font-poppins font-medium text-black text-[16px]'>
            Completed Projects
          </p>
          <p className='text-[#20B15A] font-poppins text-[40px] leading-[60px] font-bold'>
            100 +
          </p>
        </div>
      </div>
      {/* second */}
      <div className='flex py-5 lg:py-10 flex-col items-center justify-center  lg:border-r lg:border-r-[#C4C4C4] lg:pr-[40px]'>
        <div className='flex flex-col items-center justify-center gap-2.5 '>
          <Image
            src='/images/rating (1).png'
            width={70}
            height={70}
            alt='note icon'
          />
          <p className='text-center font-poppins font-medium text-black text-[16px]'>
            Customer Satisfaction
          </p>
          <p className='text-[#20B15A] font-poppins text-[40px] leading-[60px] font-bold'>
            20 %
          </p>
        </div>
      </div>
      {/* third */}
      <div className='flex py-5 lg:py-10 flex-col items-center justify-center  lg:border-r lg:border-r-[#C4C4C4] lg:pr-[40px]'>
        <div className='flex flex-col items-center justify-center gap-2.5 '>
          <Image
            src='/images/project-plan.png'
            width={70}
            height={70}
            alt='note icon'
          />
          <p className='text-center font-poppins font-medium text-black text-[16px]'>
            Raised by Clients
          </p>
          <p className='text-[#20B15A] font-bold font-poppins text-[40px] leading-[60px]'>
            $10M
          </p>
        </div>
      </div>
      {/* fourth */}
      <div className='flex py-5 lg:py-10 flex-col items-center justify-center  '>
        <div className='flex flex-col items-center justify-center gap-2.5 '>
          <Image
            src='/images/timeline 2.png'
            width={70}
            height={70}
            alt='note icon'
          />
          <p className='text-center font-poppins font-medium text-black text-[16px]'>
            Years in Business
          </p>
          <p className='text-[#20B15A] font-poppins text-[40px] leading-[60px] font-bold'>
            2 yrs
          </p>
        </div>
      </div>
    </section>
  );
};

export default Rating;
