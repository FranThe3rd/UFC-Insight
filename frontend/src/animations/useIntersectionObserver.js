import { useEffect } from 'react';

const useIntersectionObserver = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('showLeft');
        } else {
          entry.target.classList.remove('showLeft');
        }
      });
    });
    const hiddenElements = document.querySelectorAll('.hideLeft');
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

export default useIntersectionObserver;