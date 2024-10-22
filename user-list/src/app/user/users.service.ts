import {Injectable, signal} from '@angular/core';
import {User} from './user.model';
import data from '../users.json'
import {FormGroup} from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class UsersService {
    users = signal<User[]>([]);

    constructor() {
        this.users.set(data.users);
    }

    getUserById(id: number) {
        return this.users().find((user) => user.id === id);
    }

    updateUser(formGroup: FormGroup, id: number) {
        const data = formGroup.value;

        const user: User = {
            id: id,
            email: data.email,
            birthDate: data.birthDate.toString(),
            firstName: data.firstName,
            lastName: data.lastName,
            middleName: data.middleName,
            profileImgUrl: data.imageUrl,
            gender: data.gender,
            isActivated: data.isActivated,
            phoneNumber: data.phoneNumber,
            language: data.language,
            nationality: data.nationality,
            recitations: data.recitations,
        }

        this.users.set(this.users().map((elem) => {
            return elem.id === id ? user : elem
        }));
    }
}
