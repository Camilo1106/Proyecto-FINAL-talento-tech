import React from 'react';

const About = () => {
  return (
    <div className="container my-24 mx-auto md:px-6">
      {/* Section: Design Block */}
      <section className="mb-32">
        {/* Jumbotron */}
        <div className="container mx-auto text-center lg:text-left xl:px-32">
          <div className="flex grid items-center lg:grid-cols-2">
            <div className="mb-12 lg:mb-0">
              <div
                className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14">
                <h2 className="mb-8 text-3xl font-bold">Acerca de nosotros</h2>
                <div className="mx-auto mb-8 flex flex-col md:flex-row md:justify-around lg:justify-between">
                  <p className="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                      stroke="currentColor" className="mr-2 h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    El mejor equipo
                  </p>

                  <p className="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                      stroke="currentColor" className="mr-2 h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Mejor calidad
                  </p>

                  <p className="mx-auto mb-2 flex items-center md:mx-0 lg:mb-0">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2"
                      stroke="currentColor" className="mr-2 h-5 w-5">
                      <path strokeLinecap="round" strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    La mejor experiencia
                  </p>
                </div>
                <p className="mb-0 text-neutral-500 dark:text-neutral-300">
                En Alphalion, nos dedicamos a ofrecer soluciones integrales en diseño digital, mantenimiento de PC y creación de páginas web. Con un equipo experto y comprometido, brindamos soporte 24/7 para garantizar la seguridad y confianza de nuestros clientes. Nuestro enfoque centrado en el cliente nos permite ofrecer servicios de alta calidad de manera eficiente y rápida. Desde el análisis inicial hasta la implementación y el mantenimiento continuo, estamos aquí para ayudarte a alcanzar tus objetivos digitales de manera exitosa.
                </p>
                <p className="mb-0 text-neutral-500 dark:text-neutral-300">
                Nuestros servicios van más allá de la simple creación de páginas web. Ofrecemos un análisis exhaustivo de las necesidades de nuestros clientes para diseñar estrategias digitales efectivas y eficientes. Desde el diseño y desarrollo de sitios web a medida hasta la integración de tecnologías avanzadas, como inteligencia artificial y análisis de datos, nos aseguramos de que cada proyecto cumpla con los más altos estándares de calidad y funcionalidad.
                </p>
                <p className="mb-0 text-neutral-500 dark:text-neutral-300">
                Además, nuestro compromiso con la excelencia se refleja en nuestra capacidad para ofrecer soluciones extremadamente rápidas. Nos esforzamos por cumplir y superar los plazos de entrega, asegurando que cada proyecto se complete de manera oportuna y sin comprometer la calidad.
                </p>
                <p className="mb-0 text-neutral-500 dark:text-neutral-300">
                Estamos aquí para convertir tus ideas en realidad y hacer que tu presencia en línea sea un éxito.
                </p>
              </div>
            </div>

            <div>
              <img src="about.jpg"
                className="w-full rounded-lg shadow-lg dark:shadow-black/20" alt="image" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;


