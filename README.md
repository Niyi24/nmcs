# Nimatallahi Muslim Cooperative

This project is a fintech application for the Nimatallahi Muslim Cooperative, built using Nest.js for the backend and React with Tailwind CSS for the frontend.

## Project Structure

```
nimatallahi-cooperative
├── backend                # Backend application using Nest.js
│   ├── src
│   │   ├── app.module.ts  # Main application module
│   │   ├── main.ts        # Entry point of the application
│   │   ├── controllers     # Contains route controllers
│   │   │   └── user.controller.ts  # User-related routes
│   │   ├── services        # Contains business logic
│   │   │   └── user.service.ts  # User service
│   │   └── entities        # Data models
│   │       └── user.entity.ts  # User entity
│   ├── package.json       # NPM configuration for backend
│   └── tsconfig.json      # TypeScript configuration for backend
├── frontend               # Frontend application using React
│   ├── src
│   │   ├── App.tsx        # Main React component
│   │   ├── index.tsx      # Entry point for React application
│   │   ├── components      # Contains React components
│   │   │   └── Dashboard.tsx  # Dashboard component
│   │   └── styles         # CSS styles
│   │       └── tailwind.css  # Tailwind CSS styles
│   ├── package.json       # NPM configuration for frontend
│   ├── tailwind.config.js  # Tailwind CSS configuration
│   └── tsconfig.json      # TypeScript configuration for frontend
└── README.md              # Project documentation
```

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (Node Package Manager)

### Installation

1. Clone the repository:

   ```
   git clone https://github.com/yourusername/nimatallahi-cooperative.git
   ```

2. Navigate to the backend directory and install dependencies:

   ```
   cd nimatallahi-cooperative/backend
   npm install
   ```

3. Navigate to the frontend directory and install dependencies:

   ```
   cd ../frontend
   npm install
   ```

### Running the Application

#### Backend

1. Navigate to the backend directory:

   ```
   cd nimatallahi-cooperative/backend
   ```

2. Start the backend server:

   ```
   npm run start
   ```

#### Frontend

1. Navigate to the frontend directory:

   ```
   cd nimatallahi-cooperative/frontend
   ```

2. Start the frontend application:

   ```
   npm run start
   ```

### Usage

- Access the frontend application at `http://localhost:3000`.
- The backend API will be available at `http://localhost:3001`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features.

## License

This project is licensed under the MIT License. See the LICENSE file for details.