import React, { useEffect, useState } from 'react';
import './App.css';
import Greeting from './views/Greeting';
import Introduction from './views/Introduction';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 25) { // Adjust scrollY value as needed
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Greeting isScrolled={isScrolled} />
      <Introduction isScrolled={isScrolled} />
    </div>
  );
}

export default App;
