export class Project {
  constructor(
    public id: number,
    public projectTitle: string,
    public projectImg: string,
    public projectInfo: string,
    public projectSkills: string[],
    public projectOnGithub: string,
    public projectLive: string
  ) {}
}
