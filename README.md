
# UFC Insight

A web application for searching and viewing UFC fighter data.

## Description

This project provides a user-friendly interface to search and explore UFC fighter information. Users can search by fighter name and view details such as weight, height, stance, and date of birth. The application uses React for the frontend and Spring Boot for the backend API, with data stored in a PostgreSQL database.

UFC Backend: https://github.com/FranThe3rd/UFC-Fighters-API

## Features

- Search fighters by name
- View all fighters
- Display fighter details (name, weight, height, stance, date of birth)
- Load more results functionality
- Responsive design

## Tech Stack

- Frontend: React
- Backend: Spring Boot
- Database: PostgreSQL
- API: RESTful

## Setup

### Prerequisites

- Node.js and npm
- Java Development Kit (JDK)
- PostgreSQL

### Frontend Setup

1. Clone the repository
2. Navigate to the frontend directory
3. Install dependencies:
   ```
   npm install
   ```
4. Start the development server:
   ```
   npm start
   ```

### Backend Setup

1. Navigate to the backend directory
2. Configure the PostgreSQL database connection in `application.properties`
3. Build and run the Spring Boot application:
   ```
   ./mvnw spring-boot:run
   ```

## API Endpoints

- GET `/fighter`: Retrieve all fighters
- GET `/fighter?name={name}`: Search fighters by name

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

