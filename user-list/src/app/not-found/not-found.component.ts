import { Component } from '@angular/core';
import {HeaderComponent} from '../header/header.component';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [
    HeaderComponent
  ],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css'
})
export class NotFoundComponent {
  headerTitle = '404 Error';
  title = 'Page Not Found';
}