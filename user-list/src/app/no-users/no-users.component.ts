import { Component } from '@angular/core';
import {HeaderComponent} from '../header/header.component';

@Component({
  selector: 'app-no-users',
  standalone: true,
    imports: [
        HeaderComponent
    ],
  templateUrl: './no-users.component.html',
  styleUrl: './no-users.component.css'
})
export class NoUsersComponent {
  title = 'No Users Found'
}
