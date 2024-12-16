# Brainly - The Second Brain

**Brainly - The Second Brain** is a web app where users can store important links, documents, and content securely. Users can share their stored content with others via unique links, giving them an organized and accessible space for all their vital resources.

## Features

- **User Authentication**: Sign up and sign in using username and password.
- **Content Storage**: Add, retrieve, and delete links and documents securely.
- **Content Sharing**: Share stored content with others via unique links.
- **User Profile**: View user details and content.

## Tech Stack

- **Frontend**: React, TailwindCSS, Vite, TypeScript
- **Backend**: Node.js, Express, MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **Hashing**: bcrypt for password hashing
- **API**: RESTful API for content management and user authentication

## API Endpoints

### **POST `/signup`**

- **Description**: Registers a new user.
- **Request body**:
  ```json
  {
    "username": "User's chosen username",
    "password": "User's chosen password"
  }
  ```
- **Response**:
  - `200 OK`: User successfully signed up.
  - `409 Conflict`: User already exists.

### **POST `/signin`**

- **Description**: Allows an existing user to sign in.
- **Request body**:
  ```json
  {
    "username": "User's username",
    "password": "User's password"
  }
  ```
- **Response**:
  - `200 OK`: User successfully signed in with JWT token.
  - `401 Unauthorized`: Incorrect password.
  - `404 Not Found`: User not found.

### **POST `/content`**

- **Description**: Adds content (link/document) for the authenticated user.
- **Request body**:
  ```json
  {
    "link": "The URL of the document/link",
    "type": "The type of content (e.g., link, document)",
    "title": "The title of the content",
    "userId": "The authenticated user's ID"
  }
  ```
- **Response**:
  - `200 OK`: Content successfully added.
  - `500 Internal Server Error`: Error occurred while adding content.

### **GET `/content`**

- **Description**: Retrieves all content for the authenticated user.
- **Response**:
  - `200 OK`: List of content stored by the user.
  - `200 OK`: No content found.

### **GET `/getUser`**

- **Description**: Retrieves the authenticated user's profile details.
- **Response**:
  - `200 OK`: User profile details.
  - `404 Not Found`: User not found.

### **DELETE `/delete`**

- **Description**: Deletes specific content (link/document) for the authenticated user.
- **Request body**:
  ```json
  {
    "title": "The title of the content to delete",
    "userId": "The authenticated user's ID"
  }
  ```
- **Response**:
  - `200 OK`: Content deleted successfully.
  - `404 Not Found`: Content not found or user lacks permission.

### **POST `/brain/share`**

- **Description**: Shares content with others via a unique link.
- **Request body**:
  ```json
  {
    "share": true
  }
  ```
- **Response**:
  - `200 OK`: Returns a unique hash for the shared content.
  - `200 OK`: If unsharing, returns a message: "Link deleted successfully".

### **GET `/brain/:share`**

- **Description**: Retrieves shared content using the unique hash.
- **Response**:
  - `200 OK`: Content and username for the shared link.
  - `404 Not Found`: Link not found.
  - `200 OK`: No content found for the user.

## Installation and Setup

### Backend

1. Clone the repository and navigate to the backend directory:

    ```bash
    git clone https://github.com/yourusername/brainly-the-second-brain.git
    cd backend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the backend directory with the following variables:

    ```env
    JWT_SECRET=your_jwt_secret
    MONGODB_URI=your_mongodb_connection_string
    ```

4. Start the backend server:

    ```bash
    npm run dev
    ```

### Frontend

1. Navigate to the frontend directory:

    ```bash
    cd frontend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the development server:

    ```bash
    npm run dev
    ```

## Contributing

Contributions are welcome! Please fork the repository, create a feature branch, and submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
