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
  }
];

export default projects;
