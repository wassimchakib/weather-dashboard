import { useEffect, useState } from 'react';

const Sidebar = () => {
  const [width, setwidth] = useState(window.innerWidth);

  const handleWindowSizeChange = () => {
    setwidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return (
    <nav>
      <h1>Weather app</h1>
      <ul>
        <li>{width}</li>
      </ul>
    </nav>
  );
};

export default Sidebar;
