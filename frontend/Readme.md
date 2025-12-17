# EchoStream Frontend
This is the frontend part of the EchoStream project, built using React.js and Vite. It provides an intuitive user interface for exploring movies and TV shows, fetching data from The Movie Database (TMDb) API, and integrating with Firebase Authentication for user management.
## Technologies Used
- React.js
- Vite
- Babel
- Firebase Authentication
- TMDb API
- GEMINI AI API
- Tailwind CSS
- Redux Toolkit
- React Router DOM
## Project Structure
- public/ : Contains static assets such as images
- src/ : Contains the source code for the frontend application.
  - components/ : Reusable React components.
  - hooks/ : Custom React hooks.
  - utils/ : Utility functions and helpers.
  - App.jsx : The main application component.
  - main.jsx : The entry point for the React application.
  - index.css : Global CSS styles.
  - App.css : Styles specific to the App component.
- index.html : The main HTML file for the application.
- package.json : Contains metadata about the project and its dependencies.
- package-lock.json : Automatically generated file that describes the exact dependency tree.
- vite.config.js : Configuration file for Vite.
- .gitignore : Specifies files and directories to be ignored by Git.
- eslint.config.js : Configuration file for ESLint.
## Getting Started
To set up and run the frontend application, follow these steps:
1. **Install Dependencies**: Navigate to the frontend directory and run:
   ```bash
   npm install
   ```
2. **Environment Variables**: Create a `.env` file in the frontend directory and add the necessary environment variables, such as API keys for TMDb and Firebase configuration.
3. **Start the Development Server**: Run the following command to start the frontend development server:
   ```bash
   npm run dev
   ```
4. **Access the Application**: Open your browser and navigate to `http://localhost:5173` (or the port specified in your terminal) to view the application.
## Building for Production
To build the frontend application for production, run the following command:
```bash
npm run build
```
This will create an optimized build in the `dist/` directory.
## Contributing
Contributions to the frontend are welcome! Please follow the standard GitHub workflow for contributing to open-source projects.
## License
This project is licensed under the MIT License. See the LICENSE file for details.
