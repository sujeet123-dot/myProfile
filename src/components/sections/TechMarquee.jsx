import React from "react";

const techLogos = [
  "./images/react-original.svg",
  "./images/nodejs-original.svg",
  "./images/express-original.svg",
  "./images/mongodb-original.svg",
  "./images/javascript-original.svg",
  "./images/typescript-original.svg",
  "./images/python-original.svg",
  "./images/icons8-tailwind-css.svg",
  "./images/git-original.svg",
  "./images/docker-original.svg",
  "./images/icons8-machine-learning-50.png",
  "./images/icons8-my-sql.svg",
  "./images/icons8-prisma-orm-50.png",
  "./images/icons8-aws.svg",
  "./images/icons8-java.svg",
  "./images/icons8-numpy.svg",
  "./images/icons8-pandas.svg",
  "./images/icons8-matplotlib.svg",
  "./images/icons8-power-bi.svg",
  "./images/icons8-excel.svg",
];

const TechMarquee = () => {
  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-10 overflow-hidden">
      <h2 className="text-center text-2xl font-bold text-gray-800 dark:text-white mb-8">
        Technologies I Use
      </h2>

      <div className="overflow-hidden">
        <div className="flex animate-scroll space-x-12">
          {[...techLogos, ...techLogos].map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt="tech-logo"
              className="h-14 w-14 object-contain"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;