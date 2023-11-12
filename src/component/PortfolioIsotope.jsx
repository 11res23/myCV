import { useEffect } from 'react';
import Isotope from 'isotope-layout';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Lightbox from 'lightgallery';
import 'lightgallery/css/lightgallery.css';
import 'glightbox/dist/css/glightbox.min.css';
// eslint-disable-next-line no-unused-vars
import GLightbox from 'glightbox';

const PortfolioIsotope = () => {
  useEffect(() => {
    // Initialize AOS
    AOS.init();

    let portfolioContainer = document.querySelector('.portfolio-container');

    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
      });

      let portfolioFilters = document.querySelectorAll('#portfolio-flters li');

      portfolioFilters.forEach((filter) => {
        filter.addEventListener('click', function (e) {
          e.preventDefault();

          portfolioFilters.forEach((el) => {
            el.classList.remove('filter-active');
          });
          this.classList.add('filter-active');

          portfolioIsotope.arrange({
            filter: this.getAttribute('data-filter'),
          });
          portfolioIsotope.on('arrangeComplete', function () {
            AOS.refresh();
          });
        });
      });
    }

    // Initiate portfolio lightbox
    Lightbox(document.querySelector('.portfolio-container')); // Use Lightgallery for the lightbox

    // Alternatively, you can use GLightbox
    // const portfolioLightbox = GLightbox({
    //   selector: '.portfolio-lightbox',
    // });
  }, []);

  return <></>; // Empty fragment because this component doesn't render anything directly
};

export default PortfolioIsotope;
