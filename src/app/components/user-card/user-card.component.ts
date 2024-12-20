import {Component, EventEmitter, Input, Output} from '@angular/core';
import {User} from "../../models/user.model";

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.css'
})
export class UserCardComponent {
  @Input({required: true}) user!: User;
  @Output() deleteUserEvent = new EventEmitter<number>();

  public userDelete(id: number) {
    this.deleteUserEvent.emit(this.user.id)
  }
}
