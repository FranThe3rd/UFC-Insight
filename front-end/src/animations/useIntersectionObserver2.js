import { useEffect } from 'react';

const useIntersectionObserver2 = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('showRight');
        } else {
          entry.target.classList.remove('showRight');
        }
      });
    });
    const hiddenElements = document.querySelectorAll('.hideRight');
    hiddenElements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      hiddenElements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);
};

export default useIntersectionObserver2;