export enum ProjectTools {
  Angular = 'Angular',
  AngularJS = 'AngularJS',
  Express = 'Express',
  HapiJs = 'Hapi.js',
  HTML = 'HTML',
  Mongoose = 'Mongoose',
  NodeJs = 'Node.js',
  PostgreSQL = 'PostgreSQL',
  Sass = 'Sass',
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
    public preview: string,
    public company: string,
    public companyWebsite: string,
    public type: ProjectType,
    public link: string,
    public tools: ProjectTools[],
    public description: string
  ) {
    this.preview = `assets/projects/${preview}`;
  }

}
