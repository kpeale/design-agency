const Newsletter = () => {
  return (
    <section className='my-[4rem] lg:my-[6rem] 2xl:my-48 flex items-center justify-center flex-col'>
      <div className='flex flex-col gap-[22px] items-center justify-center'>
        <p className='text-[#20B15A] font-poppins text-[20px] font-medium'>
          SUBSCRIBE
        </p>
        <div className='max-w-[300px] hsm:max-w-[350px] nwsm:max-w-[375px] gsm:max-w-[495px]'>
          <p className='font-poppins text-2xl sm:text-[30px] text-black font-semibold text-center'>
            Subscribe To Get The Latest News About Us
          </p>
        </div>
      </div>
      <div className='mt-[5px] max-w-[300px] nwsm:max-w-[350px] sm:max-w-max'>
        <p className='text-[#8B8B8B] font-poppins text-[16px] text-center font-medium'>
          Please drop your email below to get daily update about what we do
        </p>
      </div>
      <div className='mt-[40px] relative'>
        <input
          type='text'
          name='email'
          id='email'
          className='w-[300px] nwsm:w-[350px] rounded-[14px] gsm:w-[450px] sm:w-[596px] border-[1px] border-[#8B8B8B] py-5 px-2 sm:px-4 text-[#8B8B8B] font-poppins text-sm sm:text-[16px]'
          placeholder='Enter Your Email Adress'
        />
        <button className='bg-[#F55F1D] py-[14.35px] px-2.5 sm:px-[24.32px] text-white font-poppins font-medium text-sm sm:text-[16.22px] rounded-[14px] absolute right-2 top-[6.5px]'>
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default Newsletter;
