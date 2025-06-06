import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserMockService } from 'src/app/core/services/user-mock.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {
  userForm: FormGroup;
  userId: string | null;
  isLoading = false;
  error: string | null = null;

  constructor(
    private fb: FormBuilder,
    private userService: UserMockService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');
    if (this.userId) {
      this.loadUser();
    }
  }

  loadUser(): void {
    this.isLoading = true;
    this.userService.getUserById(this.userId!).subscribe({
      next: (user: User) => {
        this.userForm.patchValue(user);
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Failed to load user data';
        this.isLoading = false;
      }
    });
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      this.isLoading = true;
      const userData: User = this.userForm.value;
      if (this.userId) {
        this.userService.updateUser(this.userId, userData).subscribe({
          next: () => {
            this.router.navigate(['/users']);
            this.isLoading = false;
          },
          error: () => {
            this.error = 'Failed to update user';
            this.isLoading = false;
          }
        });
      } else {
        this.userService.addUser(userData).subscribe({
          next: () => {
            this.router.navigate(['/users']);
            this.isLoading = false;
          },
          error: () => {
            this.error = 'Failed to add user';
            this.isLoading = false;
          }
        });
      }
    }
  }
}