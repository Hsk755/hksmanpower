import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  getUserss(data: any) {
    return this.http.get("https://schema.postman.com/json/collection/v2.1.0/collection.json")
  }


}
