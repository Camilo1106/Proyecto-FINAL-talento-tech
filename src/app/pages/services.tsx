import React from 'react';

function services() {
  return (
    <div className="container my-24 mx-auto md:px-6">
      <section className="mb-32 text-center">
        <h2 className="mb-12 text-center text-3xl font-bold">Nuestros servicios</h2>

        <div className="grid gap-6 lg:grid-cols-3 xl:gap-x-12">
          <div className="mb-6 lg:mb-0">
            <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
              data-te-ripple-init data-te-ripple-color="light">
              <img src="diseño.png" className="w-full" alt="Louvre" />
                <div
                  className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                </div>
            </div>

            <h5 className="mb-3 text-lg font-bold">Alphalion Desing</h5>
            <div className="mb-3 flex items-center justify-center text-sm font-medium text-danger dark:text-danger-500"/>
            <p className="text-neutral-500 dark:text-neutral-300">
            Diseño digital de vanguardia que transforma tu visión en realidad. En Alphalion, ofrecemos una gama completa de servicios de diseño digital que incluyen diseño web, diseño de aplicaciones móviles, identidad de marca y mucho más. Nuestro equipo de expertos en diseño trabaja contigo para crear experiencias digitales impactantes y efectivas que cautivan a tu audiencia y hacen crecer tu negocio. Confía en nosotros para llevar tu presencia digital al siguiente nivel.
            </p>
          </div>

          <div className="mb-6 lg:mb-0">
            <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
              data-te-ripple-init data-te-ripple-color="light">
              <img src="pc.png" className="w-full" alt="Louvre" />
                <div
                  className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                </div>
            </div>

            <h5 className="mb-3 text-lg font-bold">Alphalion Tecnology</h5>
            <div className="mb-3 flex items-center justify-center text-sm font-medium text-primary dark:text-primary-400"/>
            <p className="text-neutral-500 dark:text-neutral-300">
            Optimiza el rendimiento y prolonga la vida útil de tus dispositivos con nuestro servicio de mantenimiento de PC y más. En Alphalion, nos especializamos en mantener tus equipos funcionando de manera eficiente y segura. Desde la eliminación de virus y malware hasta la actualización de software y hardware, nuestro equipo de expertos está aquí para ayudarte a mantener tus dispositivos en óptimas condiciones. Confía en nosotros para mantener tu tecnología funcionando sin problemas.
            </p>
          </div>

          <div className="mb-0">
            <div className="relative mb-6 overflow-hidden rounded-lg bg-cover bg-no-repeat shadow-lg dark:shadow-black/20"
              data-te-ripple-init data-te-ripple-color="light">
              <img src="desarrollo.png" className="w-full" alt="Louvre" />
                <div
                  className="absolute top-0 right-0 bottom-0 left-0 h-full w-full overflow-hidden bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,.15)]">
                </div>
            </div>

            <h5 className="mb-3 text-lg font-bold">Alphalion Web</h5>
            <div className="mb-3 flex items-center justify-center text-sm font-medium text-yellow-600"/>
            <p className="text-neutral-500 dark:text-neutral-300">
            Desarrollamos experiencias web excepcionales que impulsan tu presencia en línea y mejoran la interacción con tus clientes. Nuestro equipo experto en diseño y desarrollo web crea sitios web a medida, aplicaciones web y software personalizado para satisfacer tus necesidades específicas. Desde la conceptualización hasta la implementación, nos enfocamos en la creatividad, la funcionalidad y la usabilidad para ofrecerte soluciones digitales efectivas. Confía en Alphalion para llevar tu presencia en línea al siguiente nivel.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default services;







