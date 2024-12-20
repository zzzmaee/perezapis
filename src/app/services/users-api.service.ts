import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {
  private readonly apiUrl = 'https://jsonplaceholder.typicode.com/users';
  private readonly http = inject(HttpClient);
  constructor() {
  }
  public getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl)
  }
}
