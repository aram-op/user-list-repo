import {Component, ElementRef, inject, ViewChild} from '@angular/core';
import {UsersService} from '../users.service';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {User} from '../user.model';
import {HeaderComponent} from '../../header/header.component';
import {Router} from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';

@Component({
    selector: 'app-users-list',
    standalone: true,
    imports: [MatTableModule, HeaderComponent, MatPaginator],
    templateUrl: './users-list.component.html',
    styleUrl: './users-list.component.css'
})
export class UsersListComponent {
    private usersService = inject(UsersService);
    private router = inject(Router);
    dataSource: MatTableDataSource<User>;
    @ViewChild(MatPaginator) paginator!: MatPaginator;
    @ViewChild('matTableContainer') matTableContainerElem!: ElementRef;

    displayedColumns: string[] = ['id', 'first-name', 'last-name', 'email', 'status'];

    constructor() {
        this.dataSource = new MatTableDataSource(this.usersService.users());
    }

    ngOnInit() {
        if (!this.dataSource.data || this.dataSource.data.length === 0) {
            this.router.navigate(['users/empty']);
        }
    }

    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }

    onSelectUser(selectedUser: User) {
        this.router.navigate([`users/${selectedUser.id}`]);
    }

    onPageChange() {
        this.matTableContainerElem.nativeElement.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }
}
