import {inject, Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {User} from "../models/user.model";
import {UsersApiService} from "./users-api.service";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private usersApiService = inject(UsersApiService);
  private usersSubject$ = new BehaviorSubject<User[]>([]);
  public users$ = this.usersSubject$.asObservable();

  constructor() {
  }

  public loadUsers(): void {
    this.usersApiService.getUser().subscribe(
      users =>
        this.usersSubject$.next(users)
    )
  }

  public deleteUser(id: number): void {
    this.usersSubject$.next(this.usersSubject$.value.filter(user=>user.id !== id))
  }
}
