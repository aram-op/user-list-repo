import {Component, inject, input} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatFormField, MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatOption, MatSelect} from '@angular/material/select';
import {MatButton} from '@angular/material/button';
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from '@angular/material/datepicker';
import {UsersService} from '../users.service';
import {Router} from '@angular/router';
import {HeaderComponent} from '../../header/header.component';

@Component({
    selector: 'app-user-details',
    standalone: true,
    imports: [
        ReactiveFormsModule,
        MatFormField,
        MatFormFieldModule,
        MatInputModule,
        MatSelect,
        MatOption,
        MatButton,
        MatDatepickerInput,
        MatDatepickerToggle,
        MatDatepicker,
        HeaderComponent,
    ],
    templateUrl: './user-details.component.html',
    styleUrl: './user-details.component.css',
})
export class UserDetailsComponent {
    private usersService = inject(UsersService);
    private router = inject(Router);
    private formBuilder = inject(FormBuilder);
    userId = input.required<string>();
    userDetailsForm!: FormGroup;


    ngOnInit() {
        this.updateUserDetails();
    }

    onSubmit() {
        this.usersService.updateUser(this.userDetailsForm, +this.userId());
    }

    onCancel() {
        this.router.navigate(['users/list']);
    }

    updateUserDetails() {
        let user = this.usersService.getUserById(+this.userId());

        if (!user) {
            this.router.navigate(['not-found']);
            return;
        }

        this.userDetailsForm = this.formBuilder.group({
            email: new FormControl(user?.email, [Validators.required, Validators.email]),
            birthDate: new FormControl(new Date(user!.birthDate), Validators.required),
            firstName: new FormControl(user?.firstName, Validators.required),
            middleName: new FormControl(user?.middleName),
            lastName: new FormControl(user?.lastName, Validators.required),
            isActivated: new FormControl('' + user?.isActivated, Validators.required),
            imageUrl: new FormControl(user?.profileImgUrl),
            phoneNumber: new FormControl(user?.phoneNumber, Validators.required),
            gender: new FormControl(user?.gender, Validators.required),
            language: new FormControl(user?.language, Validators.required),
            nationality: new FormControl(user?.nationality, Validators.required),
            recitations: new FormControl(user?.recitations),
        });
    }

    get formIsInvalid() {
        return !(this.userDetailsForm.touched && this.userDetailsForm.dirty && this.userDetailsForm.valid);
    }
}
