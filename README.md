# User Management Dashboard

This project is a User Management Dashboard built with Angular 19. It provides functionalities for managing users, including viewing, adding, editing, and deleting user information. The application utilizes Angular Material for UI components and implements various features such as routing, form validation, and data handling through mock services.

## Features

- **Dashboard**: Overview of user statistics and quick actions.
- **User List**: Displays a paginated, sortable, and filterable list of users.
- **User Detail**: View detailed information about a selected user.
- **User Edit**: Form for adding new users or editing existing user information.
- **Form Validation**: Ensures data integrity when adding or editing users.
- **Navigation Guards**: Protects routes based on user authentication status.
- **Error Handling**: Global error handling for HTTP requests.
- **Loading Indicators**: Displays loading spinners during data fetching.

## Technologies Used

- Angular 19
- Angular Material
- Reactive Forms
- Dependency Injection
- Signals

## Project Structure

```
user-management-dashboard
├── src
│   ├── app
│   │   ├── core
│   │   │   ├── guards
│   │   │   ├── interceptors
│   │   │   ├── services
│   │   │   └── core.module.ts
│   │   ├── shared
│   │   │   ├── components
│   │   │   ├── pipes
│   │   │   └── shared.module.ts
│   │   ├── features
│   │   │   ├── dashboard
│   │   │   └── users
│   │   │   └── features.module.ts
│   │   ├── app-routing.module.ts
│   │   ├── app.component.ts
│   │   └── app.module.ts
│   ├── assets
│   ├── environments
│   └── main.ts
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

## Getting Started

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd user-management-dashboard
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Run the application:
   ```
   ng serve
   ```

5. Open your browser and navigate to `http://localhost:4200`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.