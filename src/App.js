import './App.css';
import React, { useEffect, useState } from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import NavBar from './components/NavBar.js';

function App() {
  const massless = { tension: 200, friction: 14, mass: 0.05 };
  const width = window.innerWidth;

  const setDimensions = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })[1];

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  return (
    <>
      <NavBar></NavBar>
      <div style={{ height: '100vh' }}>
        <Parallax pages={3}
          config={massless}
          style={{ backgroundColor: "white" }}>
          {/* First Section - Black Background */}
          <ParallaxLayer
            offset={0}
            speed={0.25}
            style={{ backgroundColor: 'black', height: "75vw" }}

          >
          </ParallaxLayer>
          {/* Lawrence Miao */}
          <ParallaxLayer
            offset={0}
            speed={0}
            className='text-white bg-transparent text-center font-thin text-9xl pt-[14vw]'

          >
            <h1>
              Lawrence Miao
            </h1>
          </ParallaxLayer>

          {/* Red Sun */}
          <ParallaxLayer
            offset={0.5}
            speed={1.5}
            config={massless}
          >
            <svg
              width="100vw"
              height="75vw"
              viewBox={`0 0 ${width} ${width}`}
              style={{ display: 'block', backgroundColor: "transparent" }}>

              <circle
                cx="30vw"   // Center X coordinate
                cy="40vw"   // Center Y coordinate
                r="15vw"    // Radius
                fill="#FF3C00" // Fill color
              />
            </svg>
          </ParallaxLayer>
          <ParallaxLayer
            offset={0}
            speed={0.25}
            config={massless}
          >
            <svg
              width="100vw"
              height="75vw"
              viewBox={`0 0 ${width} ${width * 0.75}`}
              style={{ display: 'block', backgroundColor: "transparent" }}>

              <polygon
                points={`0,${width * 0.75} ${width / 2},${width * 0.25} ${width},${width * 0.75}`}
                fill="white"
              />
            </svg>
          </ParallaxLayer>

          <ParallaxLayer
            offset={2}
            speed={1}
            style={{ backgroundColor: 'white' }}
            config={massless}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%',
              color: 'black'
            }}>
              <h1>Second Section</h1>
            </div>
          </ParallaxLayer>

        </Parallax>
      </div >
    </>
  );
}

export default App;
