import Nav from './components/Nav';
import Hero from './components/Hero';
import Aboutus from './components/Aboutus';
import Rating from './components/Rating';
import Portfolio from './components/Portfolio';
import Testimonial from './components/Testimonial';
import NewsLetter from './components/Newsletter';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Aboutus />
      <Rating />
      <Portfolio />
      <Testimonial />
      <NewsLetter />
      <Footer />
    </>
  );
}
