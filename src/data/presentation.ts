type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
};

const presentation: Presentation = {
  mail: "jesuspelayo93@gmail.com",
  title: "Hola soy Jesús 👋",
  description:
    "Hola, *soy un programador Web Fronted*. Apasionado por el desarrollo web, estoy listo para enfrentar nuevos desafíos y crear experiencias digitales impactantes",
  socials: [
     {
      label: "Github",
      link: "https://github.com/pelayo93",
    },
    {
      label: "linkedin",
      link: "https://www.linkedin.com/in/jesus-pelayo-pelayo-cordova-b79005120/"
    }
  ],
};

export default presentation;
