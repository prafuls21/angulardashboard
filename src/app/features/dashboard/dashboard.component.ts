import { Component, OnInit } from '@angular/core';
import { UserMockService } from 'src/app/core/services/user-mock.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  userCount: number = 0;

  constructor(private userService: UserMockService) {}

  ngOnInit(): void {
    this.loadUserCount();
  }

  loadUserCount(): void {
    this.userService.getUsers().subscribe(users => {
      this.userCount = users.length;
    });
  }
}