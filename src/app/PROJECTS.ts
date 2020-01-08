import { Project } from './@core/models';

export const PROJECTS = [
  new Project(
    'atelier-c',
    'atelierc.png',
    'Création d\'un site vitrine',
    [ 'Wordpress' ],
    'https://atelier-c.fr',
    'Atelier Cécile de Latour',
    'https://atelier-c.fr'
  ),
  new Project(
    'placeloop-ui-kit',
    'placeloop.png',
    'Intégration de la nouvelle identité de l\'application à partir de maquettes réalisées par un studio de design',
    [ 'AngularJS', 'HTML', 'SASS' ],
    'https://ui-components.placeloop.com/',
    'Placeloop',
    'https://placeloop.com/'
  ),
  new Project(
    'freetaps-api',
    'freetaps.png',
    'Conception, développement et déploiement de la dernière version de l\'API',
    [ 'Node.js', 'PostgreSQL' ],
    'https://api.freetaps.earth/',
    'Association Eaupen',
    'https://freetaps.earth/'
  ),
];
