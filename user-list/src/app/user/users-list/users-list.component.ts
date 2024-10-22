import {Component, inject} from '@angular/core';
import {UsersService} from '../users.service';
import {MatTableModule} from '@angular/material/table';
import {User} from '../user.model';
import {HeaderComponent} from '../../header/header.component';
import {Router} from '@angular/router';

@Component({
    selector: 'app-users-list',
    standalone: true,
    imports: [MatTableModule, HeaderComponent],
    templateUrl: './users-list.component.html',
    styleUrl: './users-list.component.css'
})
export class UsersListComponent {
    private usersService = inject(UsersService);
    private router = inject(Router);
    dataSource = this.usersService.users;

    displayedColumns: string[] = ['id', 'first-name', 'last-name', 'email', 'status'];

    ngOnInit() {
        if(!this.dataSource() || this.dataSource().length === 0) {
            this.router.navigate(['users/empty']);
        }
    }

    onSelectUser(selectedUser: User) {
        this.router.navigate([`users/${selectedUser.id}`]);
    }
}
