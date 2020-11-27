import { INFORMATION } from './INFORMATION.constants';
import { PROJECTS } from './PROJECTS.constants';

export const PAGES = [
  {
    displayInHeader: true,
    routerLink: '/about',
    label: $localize`À propos`,
    description: $localize`Mes outils préférés : ${INFORMATION.favoriteTools.join(', ')}. Plus de détails sur mon profil LinkedIn ou Malt.`
  },
  {
    displayInHeader: true,
    routerLink: '/projects',
    label: $localize`Projets`,
    description: $localize`J'ai travaillé pour ces entreprises : ${PROJECTS.map(project => project.company).join(', ')}.`
  },
  {
    displayInHeader: false,
    routerLink: '/privacy',
    label: $localize`Confidentialité`,
    description: null
  }
];
