# Mega Blogs

Mega Blogs is a dynamic and interactive blogging website built using the React.js framework with Vite and Tailwind CSS. The website allows users to log in, sign up, and interact with blog posts by reading, adding, editing, and deleting content. The backend is powered by Appwrite, providing a seamless database as a service.

## Features

- **User Authentication**: Secure login and sign-up functionality.
- **Post Interaction**: Users can view, add, edit, and delete their blog posts.
- **Rich Text Editing**: Integrated with TinyMCE for a rich text editing experience.

## Technologies Used

- **React.js**: Frontend library for building user interfaces.
- **Vite**: Fast and lean development server.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Appwrite**: Backend service providing authentication and database management.
- **Redux Toolkit**: State management for handling global state.
- **React Hook Form**: For managing form state and validation.
- **React Router DOM**: For handling routing in the application.
- **TinyMCE React**: Rich text editor for creating and editing blog posts.
- **Redux Persist**: Persisting Redux state across sessions.

## Setup Instructions

Follow these steps to set up Mega Blogs on your local machine:

### 1. Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14.x or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Git](https://git-scm.com/)

### 2. Clone the Repository

```bash
https://github.com/Aariyan-Kumar/Mega_Bolg.git
```
cd Mega_Bolg

### 3. Install Dependencies

```bash
npm install
```
or using yarn
```bash
yarn install
```

### 4.Set Up Appwrite Backend
Mega Blogs uses Appwrite for backend services. Follow these steps to configure the backend:

1. Install Appwrite on your local server or use the cloud version.

2. Create a new project in Appwrite.

3. Set up authentication and database collections required for the blog posts and user data.

4. Update the Appwrite configuration in the frontend:
- Create a .env file in the root of the project.
- Add the necessary environment variables, such as the Appwrite endpoint, project ID, and any required API keys.

```bash
/* fill your own .env value */
VITE_APPWRITE_URL = ""
VITE_APPWRITE_PROJECT_ID = ""
VITE_APPWRITE_DATABASE_ID = ""
VITE_APPWRITE_COLLECTION_ID = ""
VITE_APPWRITE_BUCKET_ID = ""
```
### 5.Run the Project

To start the development server, run:
```bash
npm run start
```
or using yarn
```bash
yarn start
```
The application will be available at http://localhost:5137.

## Contribution
Contributions are welcome! Please fork the repository and create a pull request for any changes you'd like to make