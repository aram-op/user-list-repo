import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {UsersListComponent} from './user/users-list/users-list.component';
import {HeaderComponent} from './header/header.component';
import {UserDetailsComponent} from './user/user-details/user-details.component';
import {provideNativeDateAdapter} from '@angular/material/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UsersListComponent, HeaderComponent, UserDetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [provideNativeDateAdapter()]
})
export class AppComponent {

}
