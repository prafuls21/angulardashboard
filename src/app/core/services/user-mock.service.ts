export class UserMockService {
  private users = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com' },
    { id: 4, name: 'Bob Brown', email: 'bob@example.com' },
  ];

  getUsers() {
    return [...this.users];
  }

  getUserById(id: number) {
    return this.users.find(user => user.id === id);
  }

  addUser(user: { name: string; email: string }) {
    const newUser = {
      id: this.users.length + 1,
      ...user,
    };
    this.users.push(newUser);
    return newUser;
  }

  updateUser(updatedUser: { id: number; name: string; email: string }) {
    const index = this.users.findIndex(user => user.id === updatedUser.id);
    if (index !== -1) {
      this.users[index] = updatedUser;
      return updatedUser;
    }
    return null;
  }

  deleteUser(id: number) {
    const index = this.users.findIndex(user => user.id === id);
    if (index !== -1) {
      return this.users.splice(index, 1)[0];
    }
    return null;
  }
}