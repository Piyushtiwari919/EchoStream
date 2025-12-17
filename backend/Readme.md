# Echo Stream Backend
This directory contains the backend implementation for the Echo Stream service The backend is responsible for handling API requests, managing data storage, and serving content to clients.
## Technologies Used
- Node.js
- Express.js
- GEMINI AI API
- TMDb API
## Project Structure
- index.js : The main entry point for the backend server.
- package.json : Contains metadata about the project and its dependencies.
- package-lock.json : Automatically generated file that describes the exact dependency tree.
- .gitignore : Specifies files and directories to be ignored by Git.
## Getting Started
To set up and run the backend server, follow these steps:
1. **Install Dependencies**: Navigate to the backend directory and run:
   ```bash
   npm install
   ```
2. **Environment Variables**: Create a `.env` file in the backend directory and add the necessary environment variables, such as API keys for TMDb and GEMINI AI.
3. **Start the Server**: Run the following command to start the backend server:
   ```bash
   node index.js
   OR
   npm run dev
   ```
4. **Access the API**: The server will be running on `http://localhost:3000` (or the port specified in your environment variables). You can now make API requests to the backend.
## API Endpoints
The backend provides several API endpoints for interacting with the Echo Stream service. Refer to the API documentation for detailed information on available endpoints and their usage.
## Contributing
Contributions to the backend are welcome! Please follow the standard GitHub workflow for contributing to open-source projects.
## License
This project is licensed under the MIT License. See the LICENSE file for details.
