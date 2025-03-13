# E-Commerce App – Setup Guide

Here you can find instructions on how to set up and run the E-Commerce App, which consists of:

* **Frontend**: React.js
* **Backend**: Node.js with Express.js
* **Database**: MongoDB Atlas
* **Payment Integration**: PayPal Sandbox

## Prerequisites

* **[Node.js](https://nodejs.org/en)**
* **[MongoDB Atlas account](https://www.mongodb.com/atlas)** and connection string
* **[PayPal Sandbox Developer account](https://developer.paypal.com/tools/sandbox/)** with sandbox credentials

## Setup
1. Clone repository
   ```console
   git clone https://github.com/your-repo/e-commerce-app.git
   cd e-commerce-app
   ```

## Backend Setup 

1. **Install dependencies for the backend**
    ```console
    cd backend
    npm install
    ```
2. **Configure Environment Variables**

   1. Genereate JWT secret
      You can generate JWT secret using Node.js.
      Run this in your terminal:
      ```console
      node -e "console.log(require('crypto').randomBytes(64).toString('hex'))"
      ```

   2. In the backend folder, create a .env file and add the required environment variables:
      ```console
      PORT=5000
      MONGO_URL=your_mongodb_atlas_connection_string
      JWT_SECRET=your_jwt_secret
      PAYPAL_CLIENT_ID=your_paypal_sandbox_client_id
      PAYPAL_SECRET=your_paypal_sandbox_secret
      ```



4. **Start the Backend Server**
   
   Run in the backend folder:
   ```console
   npm start
   ```

   If succesfull you'll see:
   ```console
   Server running on port 5000...
   Connected to MongoDB...
   ```
## Frontend Setup
1. **Install dependencies for the frontend**
    ```console
    cd frontend
    npm install
    ```
2. **Configure Environment Variables**
   
   In the frontend folder, create a .env file and add:
   ```console
   REACT_APP_PAYPAL_CLIENT_ID=your_paypal_sandbox_client_id
   ```

4. **Start the Frontend Server**
   
   Run in the frontend folder:
   ```console
   npm start
   ```

   The application should be available at: http://localhost:3000/
   
