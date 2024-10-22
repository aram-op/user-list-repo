import {Routes} from '@angular/router';
import {UsersListComponent} from './user/users-list/users-list.component';
import {UserDetailsComponent} from './user/user-details/user-details.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {NoUsersComponent} from './no-users/no-users.component';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'users/list'
    },
    {
        path: 'users/list',
        component: UsersListComponent
    },
    {
        path: 'users/empty',
        component: NoUsersComponent
    },
    {
        path: 'users/:userId',
        component: UserDetailsComponent
    },
    {
        path: 'not-found',
        component: NotFoundComponent
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'not-found'
    }
];
