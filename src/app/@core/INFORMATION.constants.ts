import { ProjectTool as PT } from './models';

export const INFORMATION = {
  description: $localize`Diplômé comme <mark>ingénieur en informatique</mark> en 2019 et passionné de Web depuis toujours, je mets aujourd'hui mes compétences à disposition.`,
  job: $localize`Développeur Web`,
  github: 'https://www.github.com/tseignette',
  mail: 'tseignette@pm.me',
  malt: 'https://www.malt.fr/profile/thomasseignette',
  name: 'Thomas Seignette',
  linkedIn: {
    en: 'https://www.linkedin.com/in/thomas-seignette/?locale=en_US',
    fr: 'https://www.linkedin.com/in/thomas-seignette'
  },
  resume: {
    en: 'assets/CV_THOMAS_SEIGNETTE.pdf',
    fr: 'assets/CV_THOMAS_SEIGNETTE.pdf'
  },
  favoriteTools: [PT.Angular, PT.TypeScript, PT.HTML, PT.Sass, PT.HapiJs, PT.NodeJs, PT.Sequelize, PT.MySQL],
  picture: [
    'assets/img/webp/seignette_thomas.webp',
    'assets/img/original/seignette_thomas.jpg'
  ]
};
