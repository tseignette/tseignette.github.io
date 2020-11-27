import { Project, ProjectType, ProjectTool as PT } from './models';

export const PROJECTS = [
  new Project(
    'prestasyst',
    ['prestasyst.webp', 'prestasyst.png'],
    'PrestaSyst',
    'https://www.prestasyst.com/',
    ProjectType.Freelance,
    'https://app.prestasyst.com/',
    [PT.Angular, PT.TypeScript, PT.Sass, PT.HapiJs, PT.NodeJs, PT.Mongoose, PT.GitLabCICD],
    $localize`Mission à long terme.<br>
    Développement de la V2 de l'application Web.<br>
    Intégration de plusieurs API : Mangopay, Payline, Cronofy, Deezer, Spotify.<br>
    Administration du serveur.`
  ),
  new Project(
    'placeloop',
    ['placeloop.webp', 'placeloop.png'],
    'Placeloop',
    'https://placeloop.com/',
    ProjectType.Internship,
    'https://ui-components.placeloop.com/',
    [PT.AngularJS, PT.Sass, PT.Docker, PT.Mixpanel, PT.Inspectlet],
    $localize`Stage de 6 mois.<br>Développement de nouvelles fonctionnalités, correction de bugs.<br>
    Intégration d'un nouveau kit UI/UX en collaboration avec un studio de design.<br>
    Gestion d'une équipe de développeurs : formation, gestion de projet, revue de code.`
  ),
  new Project(
    'freetaps',
    ['freetaps.webp', 'freetaps.png'],
    'Association Eaupen',
    'https://freetaps.earth/',
    ProjectType.Volunteering,
    'https://api.freetaps.earth/',
    [PT.Express, PT.NodeJs, PT.PostgreSQL],
    $localize`Développement de la V2 de l'API.<br>
    Administration du serveur, déploiement des applications sur l'App Store et Google Play.`
  ),
  new Project(
    'atelier-c',
    ['atelier-c.webp', 'atelier-c.png'],
    'Atelier Cécile de Latour',
    'https://atelier-c.fr',
    ProjectType.Freelance,
    'https://atelier-c.fr',
    [PT.Wordpress],
    $localize`Création du nouveau site vitrine.`
  )
];
