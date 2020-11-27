export enum ProjectTool {
  Angular = 'Angular',
  AngularJS = 'AngularJS',
  Docker = 'Docker',
  Express = 'Express',
  GitLabCICD = 'GitLab CI/CD',
  HapiJs = 'Hapi.js',
  Inspectlet = 'Inspectlet',
  Mixpanel = 'Mixpanel',
  Mongoose = 'Mongoose',
  MySQL = 'MySQL',
  NodeJs = 'Node.js',
  PostgreSQL = 'PostgreSQL',
  Sass = 'Sass',
  Sequelize = 'Sequelize',
  TypeScript = 'TypeScript',
  Wordpress = 'Wordpress'
}

export enum ProjectType {
  Freelance = 'Freelance',
  Internship = 'Internship',
  Volunteering = 'Volunteering'
}

export class Project {

  constructor(
    public id: string,
    public preview: [string, string],
    public company: string,
    public companyWebsite: string,
    public type: ProjectType,
    public link: string,
    public tools: ProjectTool[],
    public description: string
  ) {
    this.preview = [
      `assets/img/webp/projects/${preview[0]}`,
      `assets/img/original/projects/${preview[1]}`
    ];
  }

}
