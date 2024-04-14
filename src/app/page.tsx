"use client";
import React, { useRef, useEffect } from 'react';
import QuoteForm from './components/QuoteForm';
import Navbar from './components/navbar';
import About from './pages/about';
import Services from './pages/services';
import Information from './pages/information';
import Elegirnos from './pages/elegirnos';

function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 1;
    }
  }, []);

  return (
    <div style={{ backgroundColor: 'white' }}>
      <Navbar />
      <div
        style={{
          position: 'relative',
          minHeight: '70vh',
          overflow: 'hidden',
          marginBottom: '2rem',
          marginTop: '0rem', 
        }}
      >
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          className="absolute inset-0 w-full h-full object-cover z-0"
          style={{ margin: '0', width: '100vw', height: '70vh', top: '0', left: '0' }}
        >
          <source src="/defini.mp4" type="video/mp4" />
          Tu navegador no soporta la etiqueta de video.
        </video>
        <div
          className="absolute inset-0 w-full h-full bg-gradient-to-b from-transparent to-black z-8"
          style={{ margin: '0', width: '100vw', height: '70vh', top: '0', left: '0' }}
        ></div>
        <div
          className="text-5xl font-extrabold text-center text-white"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1,
            fontFamily: 'Montserrat, sans-serif', // Cambiar la fuente
            fontWeight: 800, // Ajustar el peso de la fuente
            textShadow: '0 2px 4px rgba(0,0,0,0.5)', // Añadir sombra al texto
          }}
        >
          Explora el Mundo Alphalion
          <div className="text-2xl font-semibold mt-4">Agencia Innovadora</div>
        </div>
      </div>
      <About />
      <Services />
      <Elegirnos />
      <Information />
      <QuoteForm />
    </div>
  );
}

export default Home;



