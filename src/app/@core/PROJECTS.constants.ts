import { Project, ProjectType, ProjectTools as PT } from './models';

export const PROJECTS = [
  new Project(
    'prestasyst',
    'prestasyst.png',
    'PrestaSyst',
    'https://www.prestasyst.com/',
    ProjectType.Freelance,
    'https://app.prestasyst.com/',
    [ PT.Angular, PT.HTML, PT.Sass, PT.HapiJs, PT.NodeJs, PT.Mongoose ],
    $localize`Mission à long terme.<br>Développement de la V2 de l'application Web en partant de zéro, gestion du serveur.`
  ),
  new Project(
    'placeloop',
    'placeloop.png',
    'Placeloop',
    'https://placeloop.com/',
    ProjectType.Internship,
    'https://ui-components.placeloop.com/',
    [ PT.AngularJS, PT.HTML, PT.Sass ],
    $localize`Stage de 6 mois.<br>Développement de nouvelles fonctionnalités, correction de bugs.<br>
    Intégration d'un nouveau kit UI/UX et interaction avec un studio de design.<br>
    Gestion d'une équipe de développeurs.`
  ),
  new Project(
    'freetaps',
    'freetaps.png',
    'Association Eaupen',
    'https://freetaps.earth/',
    ProjectType.Volunteering,
    'https://api.freetaps.earth/',
    [ PT.Express, PT.NodeJs, PT.PostgreSQL ],
    $localize`Développement de nouvelles fonctionnalités.<br>
    Développement de la V2 de l'API en partant de zéro.<br>
    Gestion du serveur, déploiement des applications sur l'App Store et Google Play.`
  ),
  new Project(
    'atelier-c',
    'atelier-c.png',
    'Atelier Cécile de Latour',
    'https://atelier-c.fr',
    ProjectType.Freelance,
    'https://atelier-c.fr',
    [ PT.Wordpress ],
    $localize`Création du nouveau site vitrine.`
  )
];
