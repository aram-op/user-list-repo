import {Injectable, signal} from '@angular/core';
import {User} from './user.model';
import data from '../users.json'

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    users = signal<User[]>([]);

    constructor() {
        this.users.set(data.users);
    }
}
