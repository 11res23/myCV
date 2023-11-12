import { useEffect } from 'react';

const NavbarLinks = () => {
  useEffect(() => {
    const navbarlinks = document.querySelectorAll('#navbar .scrollto');

    const navbarlinksActive = () => {
      const position = window.scrollY + 200;
      navbarlinks.forEach((navbarlink) => {
        if (!navbarlink.hash) return;
        const section = document.querySelector(navbarlink.hash);
        if (!section) return;
        if (
          position >= section.offsetTop &&
          position <= section.offsetTop + section.offsetHeight
        ) {
          navbarlink.classList.add('active');
        } else {
          navbarlink.classList.remove('active');
        }
      });
    };

    window.addEventListener('load', navbarlinksActive);
    window.addEventListener('scroll', navbarlinksActive);

    return () => {
      // Cleanup event listeners if necessary
      window.removeEventListener('load', navbarlinksActive);
      window.removeEventListener('scroll', navbarlinksActive);
      // Remove any other event listeners
    };
  }, []); // Empty dependency array to run effect only once on mount

  return <></>; // Empty fragment because this component doesn't render anything directly
};

export default NavbarLinks;
