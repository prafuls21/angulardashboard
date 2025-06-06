import { Component, OnInit } from '@angular/core';
import { UserMockService } from 'src/app/core/services/user-mock.service';
import { User } from 'src/app/core/models/user.model'; // Assuming a User model exists
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'actions'];
  dataSource: MatTableDataSource<User>;
  users: User[] = [];
  length = 0;
  pageSize = 10;
  pageIndex = 0;

  constructor(private userService: UserMockService) {
    this.dataSource = new MatTableDataSource(this.users);
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.length = users.length;
      this.dataSource.data = users;
    });
  }

  onPageChange(event: PageEvent): void {
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.loadUsers(); // You may want to implement pagination logic here
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(() => {
      this.loadUsers();
    });
  }

  editUser(id: number): void {
    // Navigate to edit user route
  }

  viewUser(id: number): void {
    // Navigate to view user detail route
  }
}