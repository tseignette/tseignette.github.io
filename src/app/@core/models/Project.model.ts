export class Project {

  constructor(
    public ID: string,
    public preview: string,
    public description: string,
    public languages: string[],
    public website: string,
    public company: string,
    public companyWebsite: string,
  ) { }

}
