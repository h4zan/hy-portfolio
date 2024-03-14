export class IForm {
  constructor(
    public userName: string,
    public email: string,
    public message: string
  ) {}
}

export const defaultIForm: IForm = {
  userName: "",
  email: "",
  message: "",
};
