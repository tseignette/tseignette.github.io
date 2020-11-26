export enum ProjectTool {
  Angular = 'Angular',
  AngularJS = 'AngularJS',
  Express = 'Express',
  HapiJs = 'Hapi.js',
  HTML = 'HTML',
  Mongoose = 'Mongoose',
  NodeJs = 'Node.js',
  PostgreSQL = 'PostgreSQL',
  Sass = 'Sass',
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
