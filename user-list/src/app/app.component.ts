import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {UsersListComponent} from './user/users-list/users-list.component';
import {HeaderComponent} from './header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [RouterOutlet, UsersListComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
