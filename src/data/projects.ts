export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "Pagina de tienda para Guitarras",
    techs: ["NextJS"],
    link: "https://guitarrala-nextjs12.vercel.app",
  },
  {
    title: "Busca Recetas de Bebidas",
    techs: ["React", "JavaScript"],
    link: "https://mellow-travesseiro-6b662f.netlify.app",
  },
  {
    title: "Proyecto pequeño de Presupuesto",
    techs: ["React", "JavaScript"],
    link: "https://peaceful-sprinkles-c8c283.netlify.app",
  },
  {
    title: "Cotizador Criptomonedas al Instante",
    techs: ["React", "JavaScript"],
    link: "https://majestic-truffle-269319.netlify.app",
  }
];

export default projects;
