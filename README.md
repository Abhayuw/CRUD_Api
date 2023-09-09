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

---

This API allows you to perform CRUD (Create, Read, Update, Delete) operations on posts. You can use these endpoints to manage posts in your application.
