export class LoginPageModel {

  email: string;
  password: string;

  constructor(data?) {
    if (!data) {

      return;

    }
    this.email = data["email"];
    this.password = data["password"];
  }


}
