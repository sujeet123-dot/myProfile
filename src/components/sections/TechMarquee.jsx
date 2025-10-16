import React from "react";

const techLogos = [
  "./react-original.svg",
  "./nodejs-original.svg",
  "./express-original.svg",
  "./mongodb-original.svg",
  "./javascript-original.svg",
  "./typescript-original.svg",
  "./python-original.svg",
  "./icons8-tailwind-css.svg",
  "./git-original.svg",
  "./docker-original.svg",
  "./icons8-machine-learning-50.png",
  "./icons8-my-sql.svg",
  "./icons8-prisma-orm-50.png",
  "./icons8-aws.svg",
  "./icons8-java.svg",
  "./icons8-numpy.svg",
  "./icons8-pandas.svg",
  "./icons8-matplotlib.svg",
  "./icons8-power-bi.svg",
  "./icons8-excel.svg",
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