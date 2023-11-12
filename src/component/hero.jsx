/* eslint-disable react/no-unescaped-entities */
import { useLayoutEffect } from 'react';
import Typed from 'typed.js';

const Hero = () => {
  useLayoutEffect(() => {
    const typed = document.querySelector('.typed');

    if (typed) {
      let typed_strings = typed.getAttribute('data-typed-items');
      typed_strings = typed_strings.split(',');

      new Typed('.typed', {
        strings: typed_strings,
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 2000,
        showCursor: false, // Set to false to hide the cursor
        
      });
    }
  }, []);

  return (
    <div>
      {/* ======= Hero Section ======= */}
      <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
        <div className="hero-container" data-aos="fade-in">
          <h1>quaresma soruday</h1>
          <p>
            saya <span className="typed" style={{ color: "#3498db", textDecoration: "none" }} data-typed-items="ui ux desginer, frontend developer" />
          </p>
        </div>
      </section>
      {/* End Hero */}
    </div>
  );
};

export default Hero;
