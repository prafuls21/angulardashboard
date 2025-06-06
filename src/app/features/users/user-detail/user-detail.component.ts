import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserMockService } from 'src/app/core/services/user-mock.service';
import { User } from 'src/app/core/models/user.model'; // Assuming you have a User model defined

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  user: User | undefined;
  error: string | undefined;
  loading: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private userService: UserMockService
  ) {}

  ngOnInit(): void {
    this.loadUser();
  }

  loadUser(): void {
    const userId = this.route.snapshot.paramMap.get('id');
    if (userId) {
      this.userService.getUserById(userId).subscribe({
        next: (data) => {
          this.user = data;
          this.loading = false;
        },
        error: (err) => {
          this.error = 'User not found';
          this.loading = false;
        }
      });
    }
  }
}