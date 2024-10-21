import {Component, inject} from '@angular/core';
import {UsersService} from '../users.service';
import {MatTableModule} from '@angular/material/table';
import {User} from '../user.model';

@Component({
    selector: 'app-users-list',
    standalone: true,
    imports: [MatTableModule],
    templateUrl: './users-list.component.html',
    styleUrl: './users-list.component.css'
})
export class UsersListComponent {
    private usersService = inject(UsersService);
    dataSource = this.usersService.users;

    displayedColumns: string[] = ['id', 'first-name', 'last-name', 'email', 'status'];

    onSelectUser(selectedUser: User) {

    }
}
