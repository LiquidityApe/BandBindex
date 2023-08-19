import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useState, useEffect } from 'react';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    setIsVisible(scrollTop > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button
      className={`back-to-top ${isVisible ? 'visible' : ''}`}
      onClick={scrollToTop}
    >
          <ArrowUpwardIcon
      color='white'
      style={{ fontSize: 25, color: "#FFFFFF", cursor: "pointer" }}
    />
    </button>
  );
};

export default BackToTopButton;
