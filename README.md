# College Tour Dashboard

This is a college campus tour dashboard application that allows users to explore different college campuses.

## Deployment Instructions for Render

### Prerequisites
- A [Render](https://render.com) account
- Git repository with this code

### Option 1: Deploy as a Web Service (Recommended)

1. **Push code to GitHub or another Git provider**

2. **Create a new Web Service on Render**
   - Log in to your Render dashboard
   - Click "New" and select "Web Service"
   - Connect your Git repository
   - Give your service a name

3. **Configure build settings**
   - Set the Environment to "Docker"
   - Leave Build Command empty (uses Dockerfile)
   - Leave Start Command empty (uses Dockerfile CMD)

4. **Add Environment Variables**
   - Add `MONGODB_URI`: Your MongoDB connection string
   - Add `NODE_ENV`: Set to `production`

5. **Deploy**
   - Click "Create Web Service"

### Option 2: Deploy as a Static Site + Backend Service

If you prefer to deploy the frontend and backend separately:

#### For the Backend:

1. **Create a new Web Service on Render**
   - Connect your Git repository
   - Environment: Node
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Add the environment variables mentioned above

#### For the Frontend:

1. **Create a new Static Site on Render**
   - Connect the same Git repository
   - Build Command: leave empty
   - Publish Directory: `.` (root folder)
   - Add environment variable: `REACT_APP_API_URL` pointing to your backend service URL

### Testing the Deployment

Once deployed, your application will be available at the Render URL (e.g., https://your-app-name.onrender.com).

### Local Development

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```

### Notes

- This application uses Express.js for the backend with MongoDB for data storage
- Authentication is implemented with bcrypt.js for password hashing
- The application uses client-side routing with appropriate redirects
- The Docker deployment simplifies the process by packaging everything together 