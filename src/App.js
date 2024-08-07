import './App.css';
import React, { useRef } from 'react';
import NavBar from './components/NavBar.js';
import { motion, useScroll, useTransform } from "framer-motion"


function useParallax(value, distance) {
  return useTransform(value, [0, 1], [0, distance]);
}
function App() {

  const ref = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const width = window.innerWidth;
  const nameY = useParallax(scrollYProgress, 600);
  const y = useParallax(scrollYProgress, 400);


  return (
    <>

      <div className='fixed top-0 w-screen' style={{
        zIndex: 1000
      }}>
        <NavBar aboutRef={aboutRef}
          experienceRef={experienceRef} />
      </div>
      <motion.h1 className="text-white absolute w-screen text-center font-thin pt-[10vw]"
        style={{ fontSize: '10vw', y: nameY }}>
        Lawrence Miao
      </motion.h1>
      <motion.svg
        width="100vw"
        height="75vw"
        viewBox={`0 0 ${width} ${width}`}
        className="absolute"
        style={{
          backgroundColor: "transparent",
          y,
          zIndex: 0
        }}
      >
        <circle
          cx="30.8925565099vw"   // Center X coordinate
          cy="48.2148869802vw"   // Center Y coordinate TODO
          r="11.7851130198vw"   // Radius (100vw ^ 2 / 2) ^ 0.5 /6
          fill="#FF3C00" // Fill color
        />
      </motion.svg>
      {/* Mountain */}
      <svg
        width="100vw"
        height="75vw"
        viewBox={`0 0 ${width} ${width * 0.75}`}
        className='bg-transparent relative'
        style={{
          zIndex: 100,
        }}
        ref={ref}
      >
        <polygon
          points={`0,${width * 0.75} ${width / 2},${width * 0.25} ${width},${width * 0.75}`}
          fill="white"
        />
      </svg>



      <section
        className=' relative w-full h-screen bg-white'
        ref={aboutRef}
      >
        bruh
      </section>
      <section
        className=' relative w-full h-screen bg-white'
        ref={experienceRef}
      >
        bruh
      </section>



      <div style={{
        display: 'flex',
        justifyContent: 'center',
        height: '100%',
        color: 'black'
      }}>
        <h1>About</h1>
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        height: '100%',
        color: 'black'
      }} >
        <h1>Projects</h1>
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        height: '100%',
        color: 'black'
      }}>
        <h1>Work Experience</h1>
      </div>
    </>)
}


export default App;
