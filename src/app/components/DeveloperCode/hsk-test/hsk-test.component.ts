import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginPageModel } from '../../models/login.model';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-hsk-test',
  templateUrl: './hsk-test.component.html',
  styleUrls: ['./hsk-test.component.css']
})
export class HskTestComponent implements OnInit {

  loginModel: LoginPageModel;
  loginModels: LoginPageModel[] = [];


  userLogin: boolean=false;
  products;

  constructor(private userService:UsersService, private http:HttpClient , private router: Router) { }

  ngOnInit(): void {
    this.loginModel = new LoginPageModel();
  }

  loginUser(){
    this.http.get("assets/data.json").subscribe(data =>{
      console.log(data);
      this.products = data;
      this.router.navigateByUrl('/Dashboard')
    });
  }

  isValid() {
    let AletForm = true;
    if (this.loginModel) {
      AletForm = !this.loginModel.email || !this.loginModel.email.trim();
    }
    return AletForm;
  }


}
