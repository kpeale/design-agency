'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Emily Stones',
    title: 'CEO, Marketing Guru',
    text: 'Thank You for your service. I am very pleased with the result. I have seen exponencial growth in my business and its all thanks to your amazing service',
    image: '/images/avatar.png',
  },
  {
    name: 'James Parker',
    title: 'Founder, Startup X',
    text: 'Thank You for your service. I am very pleased with the result. I have seen exponencial growth in my business and its all thanks to your amazing service',
    image: '/images/avatar.png',
  },
  {
    name: 'Sophia Lee',
    title: 'CTO, TechFlow',
    text: 'Thank You for your service. I am very pleased with the result. I have seen exponencial growth in my business and its all thanks to your amazing service',
    image: '/images/avatar.png',
  },
  {
    name: 'Michael Green',
    title: 'Manager, BizCorp',
    text: 'Thank You for your service. I am very pleased with the result. I have seen exponencial growth in my business and its all thanks to your amazing service',
    image: '/images/avatar.png',
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3);
  const [direction, setDirection] = useState<'next' | 'prev' | null>(null);

  const getVisibleSlides = () => {
    if (window.innerWidth < 640) return 1; // mobile
    if (window.innerWidth < 1024) return 2; // tablet
    return 3; // desktop
  };

  useEffect(() => {
    const handleResize = () => {
      setVisibleSlides(getVisibleSlides());
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isAutoPlaying) {
      interval = setInterval(() => {
        setDirection('next');
        setCurrentIndex((prevIndex) => {
          return prevIndex >= testimonials.length - 1 ? 0 : prevIndex + 1;
        });
      }, 4000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setDirection('prev');
    setCurrentIndex((prev) =>
      prev > 0 ? prev - 1 : testimonials.length - visibleSlides
    );

    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setDirection('next');
    setCurrentIndex((prev) =>
      prev >= testimonials.length - visibleSlides ? 0 : prev + 1
    );

    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  useEffect(() => {
    if (direction) {
      const timer = setTimeout(() => setDirection(null), 600); // reset after 600ms
      return () => clearTimeout(timer);
    }
  }, [direction]);

  return (
    <section className='bg-white mt-[3rem] md:mt-[5rem] lg:mt-[7rem] px-0 lg:px-10 xl:px-20 2xl:px-32'>
      <div className='flex flex-col lg:flex-row items-center justify-center lg:justify-between '>
        <div className='flex flex-col items-center justify-center lg:items-start lg:justify-start'>
          <p className='text-[#20B15A] font-poppins font-medium text-[20px]'>
            TESTIMONIALS
          </p>
          <div className='mt-[15px]  max-w-[400px]'>
            <p className='text-black font-poppins text-center lg:text-start text-[20px] lg:text-[30px] font-semibold'>
              See What Our Customer Say About Us
            </p>
          </div>
        </div>

        <div className='flex flex-row items-center justify-center lg:items-start lg:justify-start gap-[21px]'>
          <button
            aria-label='Previous'
            onClick={handlePrevious}
            className='w-20 h-20 p-5 border-[1px] border-black rounded-full flex items-center justify-center'
            style={{
              backgroundColor: direction === 'prev' ? '#20B15A' : 'transparent',
            }}
          >
            <Image
              src='/images/sliderArrow-left.png'
              width={14.36}
              height={24.94}
              alt='arrow'
            />
          </button>

          <button
            aria-label='Next'
            onClick={handleNext}
            className='w-20 h-20 p-5 border-[1px] border-black rounded-full flex items-center justify-center'
            style={{
              backgroundColor: direction === 'next' ? '#20B15A' : 'transparent',
            }}
          >
            <Image
              src='/images/sliderArrow-right.png'
              width={14.36}
              height={24.94}
              alt='arrow'
            />
          </button>
        </div>
      </div>

      <div className='overflow-hidden'>
        <div
          className='flex transition-transform duration-300 ease-in-out mx-auto lg:mx-0  '
          style={{
            transform: `translateX(-${currentIndex * (100 / visibleSlides)}%)`,
            width: `${(testimonials.length / visibleSlides) * 100}%`,
          }}
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className='  w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 p-2 items-center justify-center mx-auto lg:justify-center lg:items-start lg:mx-0'
            >
              <div className='shadow-xl p-6 rounded-2xl'>
                <p className='text-lg max-w-[280px] hsm:max-w-[320px] nwsm:max-w-[350px] gsm:max-w-[450px] md:max-w-max text-black font-poppins leading-[25px]'>
                  {testimonial.text}
                </p>
                <div className='mt-4 flex gap-3 items-center'>
                  <Image
                    src={testimonial.image}
                    width={60}
                    height={60}
                    alt='avatar'
                  />
                  <div className='flex flex-col gap-[5px]'>
                    <p className='text-[20px] font-poppins text-black leading-[25px] font-semibold'>
                      {testimonial.name}
                    </p>
                    <p className='text-black font-poppins text-lg leading-[25px]'>
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
