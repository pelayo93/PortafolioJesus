export type Project = {
  title: string;
  techs: string[];
  link: string;
  isComingSoon?: boolean;
};

const projects: Project[] = [
  {
    title: "MacroStore",
    techs: ["Shopify"],
    link: "https://www.macrostore.cl",
  },
  {
    title: "MacroTape",
    techs: ["WordPress"],
    link: "https://macrotape.cl",
  },
  {
    title: "Afrodite Perfium",
    techs: ["Shopify"],
    link: "https://afroditeperfium.com",
  },
  {
    title: "Chile Incubadoras",
    techs: ["WordPress"],
    link: "https://www.chileincubadoras.cl",
  },
  {
    title: "Agroavicola",
    techs: ["WordPress"],
    link: "https://www.agroavicola.cl",
  },
  {
    title: "Macro Paper",
    techs: ["WordPress"],
    link: "https://rollostermico.cl",
  },
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
  },
];

export default projects;
