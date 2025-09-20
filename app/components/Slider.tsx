import Image from 'next/image';

const Slider = () => {
  return (
    <section className='relative overflow-hidden bg-white w-full'>
      <div className='  px-4 md:px-8 lg:px-10 xl:px-20 2xl:mx-auto 2xl:container pt-[23.13px] xl:pt-[46.26px] pb-[23.22px] xl:pb-[46.44px]'>
        <div className='flex animate-marquee gap-[3rem] md:gap-[5rem] lg:gap-[9rem]'>
          <Image
            src='/images/google.png'
            width={88.71}
            height={29.11}
            alt='google icon'
          />
          <Image
            src='/images/trello.png'
            width={141.94}
            height={29.11}
            alt='trello icon'
          />
          <Image
            src='/images/monday.png'
            width={156.88}
            height={29.11}
            alt='Monday icon'
          />
          <Image
            src='/images/Notion.png'
            width={80.11}
            height={29.11}
            alt='Notion icon'
          />
          <Image
            src='/images/Slack.png'
            width={114.29}
            height={29.11}
            alt='Slack icon'
          />

          {/* duplicate for seamless loop */}
          <Image
            src='/images/google.png'
            width={88.71}
            height={29.11}
            alt='google icon'
          />
          <Image
            src='/images/trello.png'
            width={141.94}
            height={29.11}
            alt='trello icon'
          />
          <Image
            src='/images/monday.png'
            width={156.88}
            height={29.11}
            alt='Monday icon'
          />
          <Image
            src='/images/Notion.png'
            width={80.11}
            height={29.11}
            alt='Notion icon'
          />
          <Image
            src='/images/Slack.png'
            width={114.29}
            height={29.11}
            alt='Slack icon'
          />
        </div>
      </div>
    </section>
  );
};

export default Slider;
