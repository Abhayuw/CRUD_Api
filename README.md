
# CRUD API with Node.js, Express, and MongoDB

A simple CRUD (Create, Read, Update, Delete) API built using Node.js, Express.js, and MongoDB with Mongoose. This API allows you to manage posts with title and content fields.

## Features

- Create new posts with titles and content.
- Retrieve a list of all posts.
- Retrieve a single post by its ID.
- Update the title and/or content of a post.
- Delete a post by its ID.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine.
- MongoDB installed locally or a MongoDB Atlas account for cloud hosting.

## Getting Started

Follow these steps to get the project up and running on your local machine:

1. **Clone the repository:**

   ```shell
   git clone https://github.com/Abhayuw/CRUD_Api.git
   cd CRUD_Api
   ```

2. **Install dependencies:**

   ```shell
   npm install
   ```

3. **Set up MongoDB:**

   - Ensure you have MongoDB installed and running locally.
   - Create a MongoDB database for the application.

4. **Configure the environment:**

   - Create a `.env` file in the root directory.
   - Add the following environment variables and replace the values with your MongoDB connection details:

     ```env
     MONGODB_URI=mongodb://localhost:27017/crud_db
     PORT=5000
     ```

5. **Start the server:**

   ```shell
   npm start
   ```

6. The server should now be running at `http://localhost:5000`.

## Dependencies

The project uses the following main dependencies:

- Express.js: Web framework for building the API.
- Mongoose: MongoDB object modeling for Node.js.
- Cors: Middleware for handling Cross-Origin Resource Sharing.
- Body-parser: Middleware for parsing request bodies.


## CRUD API Documentation

### Base URL
The base URL for all API endpoints is `http://localhost:5000`.

### Endpoints

#### 1. Create a New Post

- **Endpoint:** `/posts`
- **Method:** POST
- **Description:** Create a new post.
- **Request Body:**
  - `title` (String, required): The title of the post.
  - `content` (String, required): The content of the post.
- **Success Response:**
  - **Status Code:** 201 (Created)
  - **Response Body:** JSON object containing the created post.

#### 2. Get All Posts

- **Endpoint:** `/posts`
- **Method:** GET
- **Description:** Retrieve a list of all posts.
- **Success Response:**
  - **Status Code:** 200 (OK)
  - **Response Body:** JSON array containing all posts.

#### 3. Get a Single Post

- **Endpoint:** `/posts/:id`
- **Method:** GET
- **Description:** Retrieve a single post by its ID.
- **Parameters:**
  - `id` (String, required): The unique ID of the post.
- **Success Response:**
  - **Status Code:** 200 (OK)
  - **Response Body:** JSON object containing the requested post.
- **Error Response:**
  - **Status Code:** 404 (Not Found) if the post with the specified ID does not exist.

#### 4. Update a Post

- **Endpoint:** `/posts/:id`
- **Method:** PATCH
- **Description:** Update a post by its ID.
- **Parameters:**
  - `id` (String, required): The unique ID of the post.
- **Request Body:** JSON object with optional fields to update:
  - `title` (String): The updated title of the post.
  - `content` (String): The updated content of the post.
- **Success Response:**
  - **Status Code:** 200 (OK)
  - **Response Body:** JSON object containing the updated post.
- **Error Response:**
  - **Status Code:** 404 (Not Found) if the post with the specified ID does not exist.

#### 5. Delete a Post

- **Endpoint:** `/posts/:id`
- **Method:** DELETE
- **Description:** Delete a post by its ID.
- **Parameters:**
  - `id` (String, required): The unique ID of the post.
- **Success Response:**
  - **Status Code:** 200 (OK)
  - **Response Body:** JSON object with a message indicating that the post has been deleted.
- **Error Response:**
  - **Status Code:** 404 (Not Found) if the post with the specified ID does not exist.

## Contributing

Contributions are welcome! If you have any suggestions, improvements, or bug fixes, please create a pull request.
